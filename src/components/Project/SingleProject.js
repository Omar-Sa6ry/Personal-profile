import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../Icons'

const SingleProject = ({ img, link, github, title, type }) => {
  return (
    <article className='flex lg:w-full relative justify-between items-start mt-8 md:p-5 sm:p-3 xs:p-2 p-8 rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light flex-wrap gap-5 flex-col w-1/2'>
      <div className='top-0 -right-3 absolute -z-10 xs:w-[104%] sm:w-[103%] lg:w-[101%] w-[103%] rounded-br-3xl h-[103%] bg-dark dark:bg-light rounded-[2rem]'></div>

      <Link
        href={link}
        target='_blank'
        className='w-full overflow-hidden cursor-pointer'
      >
        <Image src={img} alt={title} className='w-full h-auto rounded-xl' />
      </Link>

      <div className='flex items-start justify-between gap-3 flex-wrap flex-col w-full'>
        <span className='text-xl sm:text-lg capitalize text-primary dark:text-primaryDark font-medium'>
          {type}
        </span>

        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='text-3xl font-bold capitalize sm:text-2xl xs:text-lg'>
            {title}
          </h2>
        </Link>

        <div className='between-center w-full'>
          <Link
            href={link}
            target='_blank'
            className='text-dark underline-offset-1 underline font-semibold text-xl sm:text-lg'
          >
            Visit
          </Link>

          <Link href={github} target='_blank' className='w-10 sm:w-7'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default SingleProject
