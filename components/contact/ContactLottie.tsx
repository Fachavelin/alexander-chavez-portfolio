import Lottie from 'lottie-react';
import contactAnimation from '@/public/animations/data.json';

export const ContactLottie = () => {
  return (
    <div className='flex justify-center items-center ' data-aos='fade-left'>
      <Lottie animationData={contactAnimation} style={{ height: 400 }} />
    </div>
  );
};
