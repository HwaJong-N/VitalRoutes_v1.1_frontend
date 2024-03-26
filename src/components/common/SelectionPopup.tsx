import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function SelectionPopup({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="selection-popup flex w-[286px] flex-col gap-[12px] rounded-[30px] bg-gray-11 py-[29px] shadow-2xl"
    >
      {children}
    </motion.div>
  );
}

export default SelectionPopup;
