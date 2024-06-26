const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full p-32 lg:p-16 xl:24 md:p-12 sm:p-8 inline-block bg-light dark:bg-dark text-dark dark:text-light z-0 h-full ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
