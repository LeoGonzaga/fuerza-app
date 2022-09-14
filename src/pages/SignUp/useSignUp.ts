import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { ERROR_TEXTS } from '../../constants/texts';
import http from '../../services/api';
import { AuthResponse } from '../../services/mirage/routes/user';
import { useNotificationStore } from '../../store/user';
import { checkEmptyInputs, checkInputLenght } from '../../utils';

const useSignUp = () => {
  const history = useHistory();
  const { setNotification }: any = useNotificationStore();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
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

  const handleChangeEmail = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
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

    const { token }: AuthResponse = await http.post('/auth/signup', {
      username,
      password,
      email,
    });

    if (token) {
      const payload = {
        open: true,
        message: 'User created successfully',
        error: false,
      };

      setNotification(payload);
      history.replace({
        pathname: ROUTES.SIGN_IN,
      });
    }
  };

  return {
    username,
    password,
    email,
    errors,
    handleChangeUsername,
    handleChangePassword,
    handleChangeEmail,
    handleSubmit,
  };
};

export default useSignUp;
