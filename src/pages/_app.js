import '@/styles/App.css'

import Head from 'next/head'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar/NavBar'
import { useRouter } from 'next/router'
import { Montserrat } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App ({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${montserrat?.variable} w-full min-h-screen dark:bg-dark bg-light font-mont`}
      >
        <NavBar />

        <AnimatePresence mode='wait'>
          <Component key={router?.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  )
}
