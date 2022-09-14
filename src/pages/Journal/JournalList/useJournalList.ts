import { useEffect, useState } from 'react';
import http from '../../../services/api';
import { useUserStore } from '../../../store/user';

type UserProps = {
  id: string;
};

type JournalType = {
  entryIds: any;
  id: string;
  title: string;
};
const useJournalList = () => {
  const { setJournal }: any = useUserStore();
  const [journals, setJournals] = useState<JournalType[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllJournals = async () => {
    const user = localStorage.getItem('user');
    if (user) {
      const parseUser = JSON.parse(user || '');
      const response: any = await http.get(`/journals/${parseUser.id}`);

      if (response?.journals) {
        setJournals(response.journals);
        setLoading(false);
      }
    }
  };

  const handleSelectedJournal = (id: string, title: string) => {
    const payload = {
      id,
      title,
    };
    setJournal(payload);
  };

  useEffect(() => {
    getAllJournals();
  }, []);

  return { journals, handleSelectedJournal, loading };
};

export default useJournalList;
