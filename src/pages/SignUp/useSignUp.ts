import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import http from '../../services/api';
import { AuthResponse } from '../../services/mirage/routes/user';
import { checkEmptyInputs } from '../../utils';

const useSignUp = () => {
  const history = useHistory();
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
    const checkPassword = checkEmptyInputs(password);

    setErrors({
      password: checkPassword,
      username: checkUsername,
    });

    if (checkUsername || checkPassword) return;

    const { token }: AuthResponse = await http.post('/auth/signup', {
      username,
      password,
      email,
    });

    if (token) {
      localStorage.setItem('token', token);
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
