import AnimateText from '@/components/AnimateText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AllProjects from '@/data/AllProjects'
import TransitionEffect from '@/components/TransitionEffect'

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects made By Omar Sabry</title>
        <meta
          name='description'
          content='Projects that made by omar sabry in web by using mern stack'
        />
      </Head>

      <TransitionEffect />

      <main className='center-wrap w-full flex-col gap-4 mt-20'>
        <Layout className='!pt-0 !flex flex-col gap-28'>
          <AnimateText text='Imagination Trumps Knowledge!' />

          <AllProjects />
        </Layout>
      </main>
    </>
  )
}

export default projects
