import Button from '@/components/common/Button';
import Popup from '@/components/common/Popup';
import usePopup from '@/hooks/usePopup';

function GeolocationErrorPopup() {
  const { closePopup } = usePopup();
  return (
    <Popup
      content="Geolocation API 에러가 발생했습니다."
      subContent="개발자에게 문의주세요."
      buttons={
        <Button variant="popup-point" onClick={closePopup}>
          확인
        </Button>
      }
    />
  );
}

export default GeolocationErrorPopup;
