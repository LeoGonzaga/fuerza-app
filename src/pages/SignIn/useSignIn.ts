import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import http from '../../services/api';
import { AuthResponse } from '../../services/mirage/routes/user';
import { useNotificationStore, useUserStore } from '../../store/user';
import { checkEmptyInputs, checkInputLenght } from '../../utils';

const ERROR_TEXTS = {
  username: 'This username is not a valid username',
  lengthPass: 'enter a password of 6 or more characters',
};

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
    setErrors({
      ...errors,
      username: false,
    });
  };

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
    setErrors({
      ...errors,
      password: false,
    });
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checkUsername = checkEmptyInputs(username);
    const checkPassword = checkInputLenght(password);
    setErrors({
      password: checkPassword,
      username: checkUsername,
    });

    if (checkUsername || checkPassword) {
      const payload = {
        open: true,
        message: checkUsername ? ERROR_TEXTS.username : ERROR_TEXTS.lengthPass,
        error: true,
      };
      setNotification(payload);
      return;
    }

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
