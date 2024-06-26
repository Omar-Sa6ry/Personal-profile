import Link from 'next/link'
import { CircularText } from '../Icons'

const HireMe = () => {
  return (
    <div className='z-30 fixed md:absolute lef-4 sm:right-1 bottom-4 md:right-8 md:top-[-72px] '>
      <div className='w-48 md:w-24 h-auto relative flex-center'>
        <CircularText
          className={'fill-dark dark:fill-light animate-spin-slow'}
        />
        <Link
          href='/contact'
          className='absolute top-1/2 left-1/2 flex-center br-50 w-20 h-20 md:w-12 md:h-12 md:text-[10px] font-semibold translate-x-[-50%] translate-y-[-50%] hover:shadow-none text-light dark:text-dark hover:text-dark hover:dark:text-light bg-dark dark:bg-light hover:border-none hover:bg-light hover:dark:bg-dark shadow-md border dark:border-light border-solid border-dark'
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
