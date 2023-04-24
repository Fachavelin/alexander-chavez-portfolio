import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}
