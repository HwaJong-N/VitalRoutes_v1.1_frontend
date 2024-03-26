import { AnimatePresence, motion } from 'framer-motion';
import { MouseEventHandler, useRef } from 'react';
import { usePopupStore } from '@/store/popupStore';
import usePopup from '@/hooks/usePopup';

function PopupContainer() {
  const { popup } = usePopupStore();
  const { closePopup } = usePopup();
  const dimmedRef = useRef<HTMLDivElement>(null);

  const closePopupWhenClickDimmed: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === dimmedRef.current) {
      closePopup();
    }
  };

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          ref={dimmedRef}
          onClick={closePopupWhenClickDimmed}
          className="fixed z-dimmed flex h-screen w-screen items-center justify-center bg-gray-1/50"
        >
          {popup}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupContainer;
