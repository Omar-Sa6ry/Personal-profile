import { motion } from 'framer-motion'
import { useState } from 'react'
import Logo from './Logo'
import NavF from './NavF'
import NavL from './NavL'
import Toggle from './Toggle'

const NavBar = () => {
  let [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(false)
  }

  return (
    <header className='w-full relative z-30 px-32 py-8 font-medium between-center lg:px-16 md:px-12 sm:px-8'>
      <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className=' min-w-[70vw] z-50 delay-700 transition-opacity ease-in-out fixed between-center gap-7 flex-col backdrop-blur-md rounded-lg py-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 text-light dark:text-dark' //  initial={{opacity: 0}}animate={{opacity: 100}} transition={{delay:500}}
        >
          <NavF toggle={toggle} />
          <NavL />
        </motion.div>
      ) : (
        <div className='lg:hidden w-full flex items-center justify-between'>
          <NavF toggle={toggle} />
          <NavL />
        </div>
      )}

      <Logo />
    </header>
  )
}

export default NavBar
