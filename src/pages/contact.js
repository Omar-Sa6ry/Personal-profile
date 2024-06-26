import { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Email } from '@/data/SocialLinks'
import { FaLocationDot } from 'react-icons/fa6'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimateText from '@/components/AnimateText'
import TransitionEffect from '@/components/TransitionEffect'

const contact = () => {
  const [sender, setSender] = useState('')
  const [msg, setMSG] = useState('')

  return (
    <>
      <Head>
        <title>Contact with Omar Sabry</title>
        <meta name='description' content='How to contact with Omar sabry' />
      </Head>

      <TransitionEffect />

      <main className='center-wrap w-full flex-col gap-4 lg:gap-3 md:gap-2 sm:gap-1'>
        <Layout className='!pt-0 !flex gap-16 w-full lg:flex-col-reverse md:mt-10'>
          <div className='between-center gap-5 flex-wrap flex-col w-1/2 lg:w-full br-10 p-14 md:p-7 sm:p-3 xs:p-1'>
            <AnimateText
              text="Let's work togrther"
              className='text-primary dark:text-primaryDark !text-4xl md:!xl sm:!text-base'
            />

            <input
              defaultValue={sender}
              onChange={e => setSender(e?.target?.value)}
              type='text'
              placeholder='Your Email'
              className='rounded-lg p-3 lg:mb-4 sm:p-2 md:text-sm sm:text-xs dark:bg-[#3d3d3d] bg-slate-200 w-full placeholder:text-dark hover:opacity-95 outline-none focus:border dark:placeholder:text-light focus:border-solid focus:border-primary focus:dark:border-primaryDark'
            />

            <textarea
              defaultValue=''
              onChange={e => setMSG(e?.target?.value)}
              placeholder='Enter Your message here...'
              id='msg'
              type='text'
              className='rounded-lg p-3 sm:p-2 md:text-sm sm:text-xs w-full dark:bg-[#3d3d3d] bg-slate-200 !h-[230px] sm:!h-[140px] md:!h-[180px] pt-5 pl-5 hover:opacity-95 dark:placeholder:text-light placeholder:text-dark outline-none text-dark dark:text-light'
            ></textarea>

            <Link
              href={`mailto:${Email}?subject=Regarding ${sender}&body=${msg}`}
              className='w-full dark:bg-primaryDark bg-primary text-center md:text-sm sm:text-xs text-white dark:text-dark p-3 md:p-2 sm:p-1 rounded-lg uppercase hover:opacity-95 '
            >
              Send
            </Link>
          </div>

          <div className='w-1/2 lg:w-full between-center gap-8 p-14 my-auto h-full flex-col flex-wrap sm:flex-col md:p-7 sm:p-3 xs:p-0'>
            <div className='flex w-full gap-5'>
              <div className='p-3 bg-slate-200 dark:bg-[#3d3d3d] flex-center m-auto br-6'>
                <FaPhone className='text-primary dark:text-primaryDark' />
              </div>
              <div className='flex w-full flex-col'>
                <span className='text-xl md:text-base sm:text-sm text-gray-700 dark:text-light font-medium'>
                  Phone
                </span>
                <span className='font-bold text-primary dark:text-primaryDark sm:text-sm'>
                  (+20)&nbsp;109&nbsp;185&nbsp;4368
                </span>
              </div>
            </div>

           

            <div className='flex w-full gap-5'>
              <div className='p-3 bg-slate-200 dark:bg-[#3d3d3d] flex-center m-auto br-6'>
                <FaLocationDot className='text-primary dark:text-primaryDark' />
              </div>
              <div className='flex w-full flex-col'>
                <span className='text-xs text-gray-700 dark:text-light font-medium'>
                  Address
                </span>
                <span className='font-bold text-primary dark:text-primaryDark sm:text-sm'>
                  Damietta&nbsp;,&nbsp;Egypt
                </span>
              </div>
            </div>

             <div className='flex w-full gap-5 xs:gap-3'>
              <div className='p-3 bg-slate-200 dark:bg-[#3d3d3d] flex-center m-auto br-6'>
                <MdEmail className='text-primary dark:text-primaryDark' />
              </div>
              <div className='flex w-full flex-col'>
                <span className='text-xs text-gray-700 dark:text-light font-medium'>
                  Email
                </span>
                <span className='font-bold text-primary dark:text-primaryDark sm:text-xs'>
                  {Email}
                </span>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default contact
