import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../Icons'

const FeatureProject = ({ link, github, title, content, type, img }) => {
  return (
    <article className='between-center lg:flex-col dark:bg-dark relative gap-16 w-full shadow-2xl border border-solid dark:border-light border-dark rounded-3xl bg-light lg:p-5 md:p-3 md:pb-5 lg:pb-6 p-12'>
      <div className='top-0 -right-3 absolute -z-10 w-[101%] xs:w-[104%] sm:w-[103%] lg:w-[102%] rounded-br-3xl h-[103%] bg-dark dark:bg-light rounded-[2.5rem]'></div>

      <Link
        href={link}
        target='_blank'
        className='w-1/2 lg:w-full overflow-hidden cursor-pointer'
      >
        <Image
          src={img}
          alt={title}
          className='w-full h-auto rounded-xl'
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vh'
        />
      </Link>

      <div className='flex items-start justify-between gap-3 flex-wrap flex-col w-1/2 lg:w-full'>
        <span className='text-xl md:text-xl sm:text-lg text-primary dark:text-primaryDark font-medium'>
          {type}
        </span>

        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='text-4xl md:text-3xl sm:text-2xl xs:text-lg font-bold'>
            {title}
          </h2>
        </Link>

        <p className='text-dark/90 dark:text-light/90 font-medium sm:text-sm xs:text-xs'>
          {content}
        </p>

        <div className='between-center mt-3 gap-3 md:gap-2'>
          <Link href={github} target='_blank' className='w-10 sm:w-7'>
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target='_blank'
            className='bg-dark text-light dark:text-dark dark:bg-light md:px-4 sm:px-3 xs:px-2 py-2 px-6 rounded-lg font-semibold text-lg md:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

export default FeatureProject
