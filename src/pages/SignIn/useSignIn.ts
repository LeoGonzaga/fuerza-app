import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import http from '../../services/api';
import { AuthResponse } from '../../services/mirage/routes/user';
import { useNotificationStore, useUserStore } from '../../store/user';
import { checkEmptyInputs, checkInputLenght } from '../../utils';

const useSignIn = () => {
  const history = useHistory();
  const { setUser }: any = useUserStore();
  const { setNotification }: any = useNotificationStore();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const handleChangeUsername = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUsername(target.value);
  };

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checkUsername = checkEmptyInputs(username);
    const checkPassword = checkEmptyInputs(password);
    const checkPasswordLength = checkInputLenght(password);
    setErrors({
      password: checkPassword || checkPasswordLength,
      username: checkUsername,
    });

    if (checkUsername || checkPassword || checkPasswordLength) return;

    const response: AuthResponse = await http.post('/auth/login', {
      username,
      password,
    });
    const { token, user } = response;

    if (token) {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      history.replace({
        pathname: ROUTES.JOURNAL_LIST,
      });
    } else {
      const payload = {
        open: true,
        message: response,
        error: true,
      };

      setNotification(payload);
      console.log('aqui', response);
    }
  };

  return {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
    errors,
  };
};

export default useSignIn;
