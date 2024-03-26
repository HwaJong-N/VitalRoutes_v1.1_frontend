import Button from '@/components/common/Button';
import Popup from '@/components/common/Popup';
import usePopup from '@/hooks/usePopup';

function NotfoundGPSPopup() {
  const { closePopup } = usePopup();
  return (
    <Popup
      content="사진에 GPS 정보가 없습니다."
      subContent="GPS 정보가 없다면 현재 위치를 사용합니다."
      buttons={
        <Button variant="popup-point" onClick={closePopup}>
          확인
        </Button>
      }
    />
  );
}

export default NotfoundGPSPopup;
