import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import http from '../../../services/api';
import { useNotificationStore, useUserStore } from '../../../store/user';
import { checkEmptyInputs } from '../../../utils';

const useCreateJournal = () => {
  const history = useHistory();
  const { setNotification }: any = useNotificationStore();
  const { user }: any = useUserStore();
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  const handelCreateJournal = async () => {
    const checkTitle = checkEmptyInputs(title);

    if (checkTitle) {
      const payload = {
        open: true,
        message: 'Please fill in the field to continue',
        error: true,
      };
      setNotification(payload);
      return;
    }

    if (user) {
      const response: any = await http.post('/journals', {
        title,
        userId: user.id,
      });
      if (response?.journal) {
        const payload = {
          open: true,
          message: 'Successfully created',
          error: false,
        };
        setNotification(payload);
        history.push(ROUTES.JOURNAL_LIST);
      } else {
        const payload = {
          open: true,
          message: response,
          error: true,
        };
        setNotification(payload);
      }
    }
  };
  return { title, handleChangeTitle, handelCreateJournal };
};

export default useCreateJournal;
