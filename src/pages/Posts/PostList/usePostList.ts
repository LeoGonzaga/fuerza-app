import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import http from '../../../services/api';

type StateType = {
  id: string;
  title: string;
};

const usePostList = () => {
  const { state }: any = useLocation();
  const [posts, setPosts] = useState([]);

  const getPostsByJournal = async () => {
    const response: any = await http.get(`journals/entries/${state.id}`);
    console.log('pst, reponse', response);
    if (response.entries) {
      setPosts(response.entries);
    }
  };

  useEffect(() => {
    getPostsByJournal();
  }, []);

  return { posts, state };
};

export default usePostList;
