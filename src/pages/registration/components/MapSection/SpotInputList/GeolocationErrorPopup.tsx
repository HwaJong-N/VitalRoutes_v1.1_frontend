import Button from '@/components/common/Button';
import Popup from '@/components/common/Popup';
import usePopup from '@/hooks/usePopup';

function GeolocationErrorPopup() {
  const { closePopup } = usePopup();
  return (
    <Popup
      content="GPS 정보가 존재하지 않는 사진입니다."
      subContent=""
      buttons={
        <Button variant="popup-point" onClick={closePopup}>
          확인
        </Button>
      }
    />
  );
}

export default GeolocationErrorPopup;
