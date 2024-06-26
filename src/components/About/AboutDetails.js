import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import AnimateText from '../AnimateText'
import Link from 'next/link'
import LiIcon from './LiIcon'

const AboutDetails = ({ data, text }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center start']
  })

  return (
    <div
      ref={ref}
      className='flex gap-28 flex-col relative h-full overflow-hidden mx-auto w-[75%] lg:w-[90%] md:w-full'
    >
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className='bg-dark dark:bg-light origin-top h-full absolute left-9 top-[215px] xs:left-[21px] xs:top-[162px] sm:top-[170px] sm:left-[29px] lg:top-[191px] md:top-[188px] w-[4px] md:w-[2px] md:left-[30px]'
      ></motion.div>

      <AnimateText text={text} className='text-8xl text-center' />

      <ul
        ref={ref}
        className='flex ml-4 flex-col gap-16'
        id='About'
        key='About'
      >
        {data?.map((item, index) => {
          return (
            <>
              <li
                ref={ref}
                key={index}
                className='between-center flex-col gap-2 mx-auto w-[60%] lg:w-[70%] md:w-[80%] text-left'
              >
                <LiIcon referance={ref} />

                <motion.div
                  className='between-center flex-col gap-2 md:gap-1'
                  initial={{ y: 80 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <h3 className='w-full font-bold sm:font-semibold capitalize text-2xl sm:text-xl xs:text-lg'>
                    {item?.title}{' '}
                    {item?.link && (
                      <Link
                        href={item?.link}
                        target='_blank'
                        className='capitalize text-primary dark:text-primaryDark text-2xl sm:text-xl xs:text-lg'
                      >
                        @{item?.company}
                      </Link>
                    )}
                  </h3>

                  <span className='w-full text-dark/75 dark:text-light/75 capitalize sm:text-sm xs:text-xs font-medium'>
                    {item?.time}
                    {item?.address ? ` | ${item?.address}` : ''}
                  </span>

                  <p className='w-full font-medium  sm:text-sm xs:text-xs'>
                    {item?.content}
                  </p>
                </motion.div>
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default AboutDetails
