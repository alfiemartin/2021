import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import 'tailwindcss/tailwind.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return(
    getLayout(<Component {...pageProps} />)
  );
}

export default MyApp
