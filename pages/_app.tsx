import Head from 'next/head';
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {
  return(
    <Component {...pageProps} />
  );
}

export default MyApp
