import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/index.css';

export const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
