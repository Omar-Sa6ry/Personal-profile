import Link from 'next/link'
import UseThemeSwitcger from '../Hooks/UseThemeSwitcger'
import { motion } from 'framer-motion'
import {
  FaceBookLink,
  GithubLink,
  InstagramLink,
  LinkedInLink,
  TwiterLink
} from '@/data/SocialLinks'
import {
  FaceBookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon
} from '../Icons'

const MotionLink = motion(Link)
const scale = { scale: 0.9 }
const hover = { y: -3 }

const NavL = () => {
  const [mode, setMode] = UseThemeSwitcger()

  return (
    <nav className='center-wrap gap-3 sm:gap-1'>
      <MotionLink
        href={FaceBookLink}
        target='_blank'
        whileHover={hover}
        whileTap={scale}
        className='dark:text-light text-dark lg:text-light dark:lg:text-dark w-7'
      >
        <FaceBookIcon />
      </MotionLink>

      <MotionLink
        href={InstagramLink}
        target='_blank'
        whileHover={hover}
        whileTap={scale}
        className='dark:text-light text-dark lg:text-light dark:lg:text-dark w-7'
      >
        <InstagramIcon />
      </MotionLink>

      <MotionLink
        href={TwiterLink}
        target='_blank'
        whileHover={hover}
        whileTap={scale}
        className='dark:text-light text-dark lg:text-light dark:lg:text-dark w-6'
      >
        <TwitterIcon />
      </MotionLink>

      <MotionLink
        href={LinkedInLink}
        target='_blank'
        whileHover={hover}
        whileTap={scale}
        className='dark:text-light text-dark lg:text-light dark:lg:text-dark w-6'
      >
        <LinkedInIcon />
      </MotionLink>

      <MotionLink
        href={GithubLink}
        target='_blank'
        whileHover={hover}
        whileTap={scale}
        className='dark:text-light text-dark lg:text-light dark:lg:text-dark w-6'
      >
        <GithubIcon />
      </MotionLink>

      <motion.button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        whileHover={hover}
        whileTap={scale}
        className={`w-6 p-[3px] br-50 ${
          mode === 'light'
            ? 'bg-dark text-light dark:lg:text-dark lg:text-light lg:bg-dark dark:lg:bg-light'
            : 'bg-light text-dark dark:lg:text-light lg:text-dark lg:bg-light dark:lg:bg-dark'
        }`}
      >
        {mode === 'light' ? (
          <MoonIcon className='fill-dark dark:fill-light lg:fill-light dark:lg:fill-dark' />
        ) : (
          <SunIcon className='fill-dark dark:fill-light lg:fill-dark dark:lg:fill-light' />
        )}
      </motion.button>
    </nav>
  )
}

export default NavL
