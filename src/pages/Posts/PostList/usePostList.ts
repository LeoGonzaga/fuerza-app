import { useEffect, useState } from 'react';
import http from '../../../services/api';
import { useUserStore } from '../../../store/user';

type StateType = {
  id: string;
  title: string;
};

const usePostList = () => {
  const { journal }: any = useUserStore();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPostsByJournal = async () => {
    const response: any = await http.get(`journals/entries/${journal.id}`);
    console.log('pst, reponse', response);
    if (response.entries) {
      setPosts(response.entries);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostsByJournal();
  }, []);

  return { posts, journal, loading };
};

export default usePostList;
