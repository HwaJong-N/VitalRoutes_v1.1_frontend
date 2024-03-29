import Popup from '@/components/common/Popup.tsx';
import Button from '@/components/common/Button.tsx';

interface Props {
  onConfirmClick: () => void;
  onCancelClick: () => void;
}

function ChallengeDeletePopup({onConfirmClick, onCancelClick}: Props) {
  return (
    <Popup
      content="챌린지를 삭제하시겠습니까?"
      subContent=""
      buttons={
        <>
          <Button variant="popup" onClick={onCancelClick}>
            취소
          </Button>
          <Button variant="popup-point" onClick={onConfirmClick}>
            확인
          </Button>
        </>
      }
    />
  );
}

export default ChallengeDeletePopup