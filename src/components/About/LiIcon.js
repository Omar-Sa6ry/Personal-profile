import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ referance }) => {
  const { scrollYProgress } = useScroll({
    target: referance,
    offset: ['center end', 'center center']
  })

  return (
    <figure className='stroke-dark dark:stroke-light absolute md:!w-[65px] xs:!w-[45px] sm:!w-[60px] left-0 -rotate-90'>
      <svg width='75px' height='75px' viewBox='0 0 100 100'>
        <circle
          cx='75px'
          cy='50px'
          r='20px'
          className='fill-none stroke-1 stroke-primary dark:stroke-primaryDark xs:w-[40px] sx:h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'
        />

        <motion.circle
          cx='75px'
          cy='50px'
          r='20px'
          className='fill-light dark:fill-dark stroke-[5px]'
          style={{ pathLength: scrollYProgress }}
        />

        <circle
          cx='75px'
          cy='50px'
          r='10px'
          className='fill-primary stroke-1 animate-pulse dark:fill-primaryDark'
        />
      </svg>
    </figure>
  )
}

export default LiIcon
