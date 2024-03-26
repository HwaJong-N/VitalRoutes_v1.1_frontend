import { ReactNode, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Icon from '../icons';

interface Props {
  selectPopup: ReactNode;
}

function SelectButton({ selectPopup }: Props) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeWhenClickOutside = ({ target }: MouseEvent) => {
      if (!ref.current) return;
      if (target instanceof Element && ref.current.contains(target)) return;
      setIsSelectOpen(false);
    };
    window.addEventListener('click', closeWhenClickOutside);
    return () => window.removeEventListener('click', closeWhenClickOutside);
  });

  const onClick = () => {
    setIsSelectOpen((cur) => !cur);
  };

  return (
    <div className="relative" ref={ref}>
      <button type="button" aria-label="selecct" onClick={onClick}>
        <Icon.Kebab
          className="ml-auto mr-0 fill-gray-1"
          height={32}
          width={32}
        />
      </button>
      <AnimatePresence>
        {selectPopup && (
          <div className="absolute z-selection-popup">
            {isSelectOpen && selectPopup}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SelectButton;
