import { ChangeEvent, useState } from 'react';

const useCreatePost = () => {
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  const handleChangeNote = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(target.value);
  };

  const handleSubmit = () => {
    // const response: any = await http.get(`/journals/${parseUser.id}`);
  };

  return { title, note, handleChangeNote, handleChangeTitle, handleSubmit };
};

export default useCreatePost;
