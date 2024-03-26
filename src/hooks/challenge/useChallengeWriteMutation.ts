import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChallengeRegistrationRequest } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';

export default function useChallengeWriteMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutationFn = async ({
    title,
    content,
    titleImg,
    type,
    tags,
    files
  }: ChallengeRegistrationRequest) => {
    const formData = new FormData();

    formData.append('titleImg', titleImg);

    if (files) {
      files.forEach((file) => formData.append('files', file));
    }
    if (tags) formData.append('tags', `${tags.toString()}`);

    formData.append('title', title);
    formData.append('content', content);
    formData.append('type', type);

    const res = await axios.postForm('/challenge/save', formData);
    return res;
  };

  const onSuccess = () => {
    navigate('/challenge');
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.challengeList] });
  };

  return useMutation({ mutationFn, onSuccess });
}
