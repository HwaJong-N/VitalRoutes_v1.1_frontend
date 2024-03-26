import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';
import { PropfileResponse } from '@/types/user';

function useProfile() {

  const queryKey = [QUERY_KEY.profile];
  const queryFn = async () => {
    const { data } = await axios.get<{ data: PropfileResponse }>(
      `/member/profile`,
    );
    return data.data;
  };
  return useQuery({ queryFn, queryKey });
}

export default useProfile;
