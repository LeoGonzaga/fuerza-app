import { ChangeEvent, useState } from 'react';
import http from '../../services/api';
import { AuthResponse } from '../../services/mirage/routes/user';
import { checkEmptyInputs } from '../../utils';

const useSignIn = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

    if (checkUsername || checkPassword) return;

    const response: AuthResponse = await http.post('/auth/login', {
      username,
      password,
    });

    console.log(response);
  };

  return {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
  };
};

export default useSignIn;
