import { ReactNode } from 'react';
import { usePopupStore } from '@/store/popupStore';

function usePopup() {
  const { setPopup } = usePopupStore();

  const openPopup = (popup: ReactNode) => {
    setPopup(popup);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return { openPopup, closePopup };
}

export default usePopup;
