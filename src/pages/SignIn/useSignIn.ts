import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import http from '../../services/api';
import { AuthResponse } from '../../services/mirage/routes/user';
import { checkEmptyInputs, checkInputLenght } from '../../utils';

const useSignIn = () => {
  const history = useHistory();
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

    const { token }: AuthResponse = await http.post('/auth/login', {
      username,
      password,
    });

    if (token) {
      localStorage.setItem('token', token);
      history.replace({
        pathname: ROUTES.JOURNAL_LIST,
      });
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
