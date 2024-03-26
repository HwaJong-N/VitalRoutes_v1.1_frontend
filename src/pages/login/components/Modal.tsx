import { useRef, PropsWithChildren } from 'react'
import { getImageUrl } from '@/utils/getImageUrl';

/**
 * 확인 버튼만 있는 Modal 컴포넌트
 */
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

function Modal({ isOpen, onClose, title, children }: PropsWithChildren<ModalProps>) {
    const backgroundRef = useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === backgroundRef.current) {
            onClose();
        }
    }

    return isOpen ? (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-50">
            <div
                role="presentation"
                ref={backgroundRef}
                className="fixed top-0 left-0 w-full h-full bg-black opacity-60"
                onClick={handleCloseOnOverlay}
            />

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center xl:justify-start justify-center xl:w-[420px] w-[280px] xl:h-auto h-52 xl:p-14 p-6 bg-white rounded-xl">
                <button
                    type="button"
                    className="absolute w-4 h-4 top-2 right-2 mt-2 mr-2"
                    onClick={onClose}
                >
                    <img
                        src={getImageUrl('login/close_icon.png')}
                        alt="close"
                    />
                </button>

                <div className='mb-4'>
                    <div className="w-full flex items-center justify-center xl:text-xl text-lg font-semibold mb-4 tracking-tight">{title}</div>
                    <div className="xl:text-base text-sm text-center tracking-tight">{children}</div>
                </div>
                <button
                    className='xl:w-[420px] w-[280px] xl:h-11 h-10 absolute bottom-0 rounded-b-lg bg-green-1 xl:text-xl text-base text-gray-1 font-bold leading-8 z-40'
                    type="submit"
                    onClick={onClose}>확인</button>
            </div>

        </div>
    ) : null
}

export default Modal;