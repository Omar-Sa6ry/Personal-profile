import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)
const whileHover = {
  backgroundColor: [
    '#121212',
    'rgba(131,58,180,1)',
    'rgba(253,29,29,1)',
    'rgba(252,176,69,1)',
    'rgba(131,58,180,1)',
    '#121212'
  ],
  transition: {
    duration: 1,
    repeat: Infinity
  }
}
const Logo = () => {
  return (
    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <MotionLink
        href='/'
        className='mt-2 flex-center rounded-full font-bold text-2xl bg-dark text-light w-16 h-16 dark:border-[2px] dark:border-light dark:border-solid'
        whileHover={whileHover}
      >
        OAS
      </MotionLink>
    </div>
  )
}

export default Logo
