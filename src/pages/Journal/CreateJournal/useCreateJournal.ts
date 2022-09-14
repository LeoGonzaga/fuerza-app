import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import http from '../../../services/api';
import { checkEmptyInputs } from '../../../utils';

const useCreateJournal = () => {
  const history = useHistory();
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  const handelCreateJournal = async () => {
    const user = localStorage.getItem('user');

    const checkTitle = checkEmptyInputs(title);

    if (checkTitle) return;

    if (user) {
      const parseUser = JSON.parse(user || '');
      const response: any = await http.post('/journals', {
        title,
        userId: parseUser.id,
      });
      if (response?.journal) {
        history.push(ROUTES.JOURNAL_LIST);
      }
    }
  };
  return { title, handleChangeTitle, handelCreateJournal };
};

export default useCreateJournal;
