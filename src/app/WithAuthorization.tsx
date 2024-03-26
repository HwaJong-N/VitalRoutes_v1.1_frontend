import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLoginStore } from '@/store/user/loginInfoStore';
import usePopup from '@/hooks/usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

interface Props {
  children: ReactNode;
}

function WithAuthorization({ children }: Props) {
  const { isLogin } = useLoginStore();
  const { openPopup, closePopup } = usePopup();

  if (!isLogin) {
    openPopup(
      <Popup
        content="로그인을 해주세요."
        subContent={`해당 기능을 사용하시려면 로그인 후 가능합니다.\n아래 버튼을 눌러 로그인을 진행해주세요.`}
        buttons={
          <Button variant="popup-point" onClick={closePopup}>
            확인
          </Button>
        }
      />,
    );
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default WithAuthorization;
