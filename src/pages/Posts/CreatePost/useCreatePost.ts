import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import http from '../../../services/api';
import { useNotificationStore, useUserStore } from '../../../store/user';
import { checkEmptyInputs } from '../../../utils';

const useCreatePost = () => {
  const history = useHistory();
  const { setNotification }: any = useNotificationStore();
  const { journal }: any = useUserStore();
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  const handleChangeNote = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(target.value);
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checkTitle = checkEmptyInputs(title);
    const checkContent = checkEmptyInputs(note);

    if (checkTitle || checkContent) {
      const payload = {
        open: true,
        message: 'Please fill in the field to continue',
        error: true,
      };
      setNotification(payload);
      return;
    }

    const response: any = await http.post(`/journals/entry/${journal.id}`, {
      title,
      content: note,
    });

    if (response.entry) {
      const payload = {
        open: true,
        message: 'Successfully created',
        error: false,
      };
      setNotification(payload);
      history.push(ROUTES.POST_LIST);
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
    title,
    note,
    handleChangeNote,
    handleChangeTitle,
    handleSubmit,
    journal,
  };
};

export default useCreatePost;
