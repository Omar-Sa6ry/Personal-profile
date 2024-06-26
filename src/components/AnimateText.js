import { motion } from 'framer-motion'

const qoute = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

const AnimateText = ({ className = '', text }) => {
  return (
    <div className='w-full dark:text-light flex-center m-auto text-center text-dark'>
      <motion.h1
        className={`w-full inline-block xl:text-5xl text-left sm:text-3xl lg:text-center lg:text-6xl md:text-5xl text-8xl font-bold capitalize ${className}`}
        variants={qoute}
        animate='animate'
        initial='initial'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            className='inline-block'
            variants={singleWord}
            key={index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimateText
