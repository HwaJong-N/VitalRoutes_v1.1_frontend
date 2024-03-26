import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLoginStore } from '@/store/user/loginInfoStore';
import QUERY_KEY from '@/constants/queryKey';
import { PropfileResponse } from '@/types/user';

function useProfile() {
  const { memberId } = useLoginStore();

  const queryKey = [QUERY_KEY.profile];
  const queryFn = async () => {
    const { data } = await axios.get<{ data: PropfileResponse }>(
      `/member/profile/${memberId}`,
    );
    return data.data;
  };
  return useQuery({ queryFn, queryKey });
}

export default useProfile;
