import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  const year = new Date()?.getFullYear()

  return (
    <footer className=' border-t-2 border-solid dark:border-t-light border-t-dark font-medium text-lg sm:tex-xs'>
      <Layout className='between-center py-8 lg:py-5 lg:gap-1 lg:flex-col'>
        <div className='sm:tex-xs'> {year} &copy; All Rights Reserved.</div>
     
        <div className='sm:tex-xs'>
          Built with 2024 &nbsp;
          <span className='text-2xl text-primary dark:text-primaryDark px-1'>
            &#9825;
          </span>{' '}
          by &nbsp;
          <Link
            className='underline'
            href='https://github.com/Omar-Sa6ry'
            target='_blank'
          >
            Omar Sabry
          </Link>
        </div>
     
        <Link href='/contact' target='_blank' className='underline sm:tex-xs'>
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
