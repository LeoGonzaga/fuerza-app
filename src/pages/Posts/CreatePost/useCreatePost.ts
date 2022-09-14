import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import http from '../../../services/api';
import { useUserStore } from '../../../store/user';

const useCreatePost = () => {
  const history = useHistory();
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
    const response: any = await http.post(`/journals/entry/${journal.id}`, {
      title,
      content: note,
    });

    if (response.entry) {
      history.push(ROUTES.POST_LIST);
    }
    console.log(response);
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
