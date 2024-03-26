import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { CommentWriteRequest } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';
import usePopup from '../usePopup';
import Popup from '@/components/common/Popup';

export default function useCommentWriteMutation(challengeId: string) {
  const queryClient = useQueryClient();
  const { openPopup } = usePopup();

  const mutationFn = ({
    files,
    content,
  }: Omit<CommentWriteRequest, 'challengeId'>) => {
    const formData = new FormData();

    if (files) {
      files.forEach((file) => formData.append('files', file));
    }
    formData.append('challengeId', challengeId);
    formData.append('content', content);
    return axios.postForm('/participation/save', formData);
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.comment, challengeId] });
  };

  const onError = (error: AxiosError<{ message: string }>) => {
    const message = error.response?.data.message || error.message;
    openPopup(
      <Popup content="댓글 작성을 실패했습니다." subContent={message} />,
    );
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}
