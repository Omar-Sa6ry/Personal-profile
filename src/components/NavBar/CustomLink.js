import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ title, className, href, toggle }) => {
  const router = useRouter()

  const handleChange = () => {
    toggle?.toggle()
    router.push(href)
  }

  return (
    <button
      className={`${className} relative group text-dark dark:text-light lg:text-light dark:lg:text-dark`}
      onClick={() => handleChange()}
    >
      {title}
      <span
        className={`bg-dark dark:bg-light lg:bg-light dark:lg:bg-dark w-0 absolute h-[1px] -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300 ${
          router?.asPath === href ? 'w-full' : 'w-0'
        }`}
      ></span>
    </button>
  )
}

export default CustomLink
