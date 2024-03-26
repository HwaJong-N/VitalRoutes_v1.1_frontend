import Lottie from 'react-lottie';
import BearLottie from '@/assets/lottie/animation.json';

function BearLoading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BearLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
}

export default BearLoading;
