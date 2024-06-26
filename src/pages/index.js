import Head from 'next/head'
import Image from 'next/image'
import HireMe from '@/components/Home/HireMe'
import Layout from '@/components/Layout'
import HomeText from '@/components/Home/HomeText'
import homeImg from '../../public/images/profile/Home.png'
import Lamp from '../../public/images/Lamp.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home () {
  return (
    <>
      <Head>
        <title>Omar Sabry</title>
        <meta name='description' content='Omar Sabry Page' />
      </Head>

      <TransitionEffect />

      <main className='relative'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='w-full between-center lg:flex-col'>
            <div className='w-1/2 lg:mb-6 lg:w-3/4 md:w-full'>
              <Image
                src={homeImg}
                alt='Omar Sabry'
                className='w-full h-auto'
                priority
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vh'
              />
            </div>

            <HomeText />
          </div>
        </Layout>

        <div className='bottom-12 right-8 w-28 inline-block absolute'>
          <Image
            src={Lamp}
            alt='Lamp'
            className='z-10 h-auto w-full md:hidden'
          />
        </div>
        <HireMe />
      </main>
    </>
  )
}
