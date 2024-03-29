import SelectionPopup from '@/components/common/SelectionPopup';
import useChallengeDeleteMutation from '@/hooks/challenge/useChallengeDeleteMutation.ts';
import usePopup from '@/hooks/usePopup.ts';
import ChallengeDeletePopup from '@/pages/detail/components/ChallengePopup/ChallengeDeletePopup.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  challengeId: number;
}

function ChallengeSelectPopup({ challengeId }: Props) {
  const { mutate: mutateDeletion } = useChallengeDeleteMutation(challengeId);
  const { openPopup, closePopup } = usePopup();
  const navigate = useNavigate();

  const deleteChallenge = () => {
    openPopup(
      <ChallengeDeletePopup
        onCancelClick={closePopup}
        onConfirmClick={() => {
          mutateDeletion();
          closePopup();
        }}
      />,
    );
  };

  const modifyChallenge = () => {
    navigate(`/challenge/modify/${challengeId}`)
  }


  return (
    <SelectionPopup>
      <button type="button" onClick={modifyChallenge}>
        수정하기
      </button>
      <button type="button" onClick={deleteChallenge}>
        삭제하기
      </button>
    </SelectionPopup>
  )
    ;
}

export default ChallengeSelectPopup;
