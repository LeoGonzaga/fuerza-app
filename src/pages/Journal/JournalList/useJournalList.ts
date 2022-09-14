import { useEffect, useState } from 'react';
import http from '../../../services/api';

type UserProps = {
  id: string;
};

type JournalType = {
  entryIds: any;
  id: string;
  title: string;
};
const useJournalList = () => {
  const [journals, setJournals] = useState<JournalType[]>([]);

  const getAllJournals = async () => {
    const user = localStorage.getItem('user');
    if (user) {
      const parseUser = JSON.parse(user || '');
      const response: any = await http.get(`/journals/${parseUser.id}`);
      console.log(response);

      if (response?.journals) {
        setJournals(response.journals);
      }
    }
  };

  useEffect(() => {
    getAllJournals();
  }, []);

  return { journals };
};

export default useJournalList;
