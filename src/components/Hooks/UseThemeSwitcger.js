import { useEffect, useState } from 'react'

const UseThemeSwitcger = () => {
  const [mode, setMode] = useState('')
  const preferDarkQuery = '(prefer-color-schema:dark)'

  useEffect(() => {
    const mediaQurey = window.matchMedia(preferDarkQuery)
    const usePref = window.localStorage.getItem('mode')

    const handleChange = () => {
      if (usePref) {
        let check = usePref === 'light' ? 'light' : 'dark'
        setMode(check)

        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        let check = mediaQurey.matches ? 'light' : 'dark'
        setMode(check)

        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    handleChange()

    mediaQurey.addEventListener('change', handleChange)
    return () => mediaQurey.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('mode', 'dark')
      document.documentElement.classList.add('dark')
    }
    if (mode === 'light') {
      window.localStorage.setItem('mode', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return [mode, setMode]
}

export default UseThemeSwitcger
