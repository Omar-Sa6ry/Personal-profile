import { motion } from 'framer-motion'

const SingleSkill = ({ className, title, x, y }) => {
  return (
    <motion.div
      className={`lg:py-2 lg:px-4 md:text-sm md:py-1.5 sm:text-dark sm:dark:text-light md:px-3 sm:dark:bg-transparent sm:font-bold xs:bg-transparent cursor-pointer absolute flex-center rounded-full py-3 px-6 font-semibold dark:bg-light dark:text-dark bg-dark text-light shadow-dark ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewPort={{ once: true }}
    >
      {title}
    </motion.div>
  )
}

export default SingleSkill
