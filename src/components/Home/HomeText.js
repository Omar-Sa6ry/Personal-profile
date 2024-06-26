import Link from 'next/link'
import AnimateText from '../AnimateText'
import { LinkArrow } from '../Icons'

const HomeText = () => {
  return (
    <div className='w-1/2 lg:w-full flex-center flex-col flex-wrap py-2 mx-auto'>
      <AnimateText
        text='Turning Vision Into Reality With Code And Design.'
        className='2xl:text-6xl'
      />
      <p className='my-5 text-base font-medium lg:text-center md:text-sm sm:text-xs'>
        As a skilled full-stack developer, I am dedicated to turning ideas into
        innovative web applications. Explore my latest projects and articles,
        showcasing my expertise in mern stack and web development.
      </p>

      <div className='flex gap-4 self-start items-center mt-5 w-full lg:justify-center'>
        <Link
          href='/dummy.pdf'
          download={true}
          target='_blank'
          className='border-2 border-transparent border-solid hover:border-dark hover:dark:border-light flex-center font-semibold text-light dark:text-dark bg-dark dark:bg-light p-2.5 hover:bg-light md:text-base hover:dark:bg-dark hover:text-dark hover:dark:text-light md:py-2 px-6 md:px-4 text-lg rounded-lg transition-all ease duration-4000'
        >
          Resume <LinkArrow className='w-6 ml-1' />
        </Link>

        <Link
          href='/contact'
          className='underline md:text-base bg-light dark:bg-dark dark:text-light text-dark text-lg font-semibold '
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default HomeText
