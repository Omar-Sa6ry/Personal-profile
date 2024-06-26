import Head from 'next/head'
import Layout from '@/components/Layout'
import Body from '@/components/About/Body'
import Skills from '@/components/About/Skills'
import AnimateText from '@/components/AnimateText'
import AboutDetails from '@/components/About/AboutDetails'
import { EducationData, ExpirenceData } from '@/data/Constant'
import TransitionEffect from '@/components/TransitionEffect'

const About = () => {
  return (
    <>
      <Head>
        <title>About Omar Sabry</title>
        <meta
          name='description'
          content='About Omar Sabry Skills,Education,Experiment'
        />
      </Head>

      <TransitionEffect />

      <main className='center-wrap w-full flex-col gap-4 mt-20'>
        <Layout className='!pt-0 !flex flex-col gap-28 overflow-hidden'>
          <AnimateText text='Passion Fuels Purpose !' />
          <Body />
          <Skills />
          <AboutDetails text='Expirence' data={ExpirenceData} />
          <AboutDetails text='Education' data={EducationData} />
        </Layout>
      </main>
    </>
  )
}

export default About
