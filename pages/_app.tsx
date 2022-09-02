import type { AppProps } from 'next/app'
import { HeaderContextProvider } from '../hooks/useHeaderContext'
import '../styles/index.scss'
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>{"Hello I'm Erick"}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALITICS_KEY}`} />
      <Script strategy="lazyOnload" id='google-analitics'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALITICS_KEY}')
          `}
      </Script>

      <HeaderContextProvider>
        <Component {...pageProps} />
      </HeaderContextProvider>
    </>
  )
}

export default MyApp
