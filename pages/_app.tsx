import type { AppProps } from 'next/app'
import { HeaderContextProvider } from '../hooks/useHeaderContext'
import '../styles/index.scss'
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>{"Erick Fonseca"}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta property='og:title' content='Frontend Dev. & UI/UX/Graphic Designer'/>
          <meta property='og:description' content='3+ years of experience building amazing webites using the latest technologies such as ReactJS.'/>
          <meta property='og:image' content='https://lh4.googleusercontent.com/_uh_PP7UThvVKDUNM5ADMOgx_etB0gl2QJ9gdjjnML0NcoOEnf3K3xO5gEbz70qv0Rg=w2400'/>
          <meta property='og:image:width' content='1200'/>
          <meta property='og:image:height' content='630'/>
          <meta property='og:image:alt' content='Erick Portfolio'/>
          <meta property='og:url' content='https://erickfons.me/'/>
          <meta property='og:type' content='website'/>
          <meta property='og:site_name' content='Erick Portfolio'/>
          <meta name='twitter:card' content='summary_large_image'/>
          <meta name='twitter:site' content='@theCrusader0000'/>
          <meta name='twitter:creator' content='@theCrusader0000'/>
          <meta name='twitter:title' content='Frontend Dev. & UI/UX/Graphic Designer'/>
          <meta name='twitter:description' content='3+ years of experience building amazing webites using the latest technologies such as ReactJS.'/>
          <meta name='twitter:image' content='https://lh4.googleusercontent.com/_uh_PP7UThvVKDUNM5ADMOgx_etB0gl2QJ9gdjjnML0NcoOEnf3K3xO5gEbz70qv0Rg=w2400'/>
          <meta name='twitter:image:alt' content='Erick Portfolio'/>
          <meta name='description' content='3+ years of experience building amazing webites using the latest technologies such as ReactJS.'/>
          <meta name='keywords' content='Erick, Portfolio, Frontend, Developer, UI/UX, Graphic, Designer, Web, Development, Graphic, Design, UI/UX, Design, Cuba, ReactJS, NextJS'/>
          <meta name='author' content='Erick Fonseca'/>
          <meta name='robots' content='index, follow'/>
          <meta name='googlebot' content='index, follow'/>
          <meta name="google-site-verification" content="OA4QQ4tNPVA9s_Mf-mwc8sb-sON0_NNvJO9aSVuaEg0" />
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
