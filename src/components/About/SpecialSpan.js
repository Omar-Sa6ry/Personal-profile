import AnimateNumber from '../AnimateNumber'

const SpecialSpan = ({ title, value }) => {
  return (
    <div className='flex-col flex items-end justify-center gap-3'>
      <span className='inline-block text-7xl md:text-4xl lg:mx-auto font-bold'>
        <AnimateNumber value={value} />+
      </span>
      <h2 className='text-dark/75 dark:text-light/75 font-medium text-xl capitalize'>
        {title}
      </h2>
    </div>
  )
}

export default SpecialSpan
