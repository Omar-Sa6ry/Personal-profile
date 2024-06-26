import React from 'react'
import CustomLink from './CustomLink'

const val = 4

const NavF = toggle => {
  return (
    <nav className='dark:lg:text-light lg:text-dark lg:flex justify-center items-center flex-col flex-wrap gap-4'>
      <CustomLink href='/' title={'Home'} toggle={toggle} />
      <CustomLink
        href='/about'
        title={'About'}
        className='mx-4'
        toggle={toggle}
      />
      <CustomLink
        href='/projects'
        title={'Projects'}
        className={`mx-${val}`}
        toggle={toggle}
      />
      <CustomLink href='/contact' title={'Contact'} toggle={toggle} />
    </nav>
  )
}

export default NavF
