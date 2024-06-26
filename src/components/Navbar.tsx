import { Bars3Icon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar (): JSX.Element {
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = (): void => {
    setMenuState(!menuState)
  }

  return (
    <nav className='sticky top-0 left-0 z-20 w-full flex justify-between items-center p-5 text-white text-l opacity-95'>
      <div className=' absolute top-0 left-0 w-full h-full bg-black z-0' />
      <h1 className='text-2xl font-bold uppercase z-10'>Clara Photographer</h1>
      <Menu menuState={menuState}>
        <Item text='Inicio' to='/' />
        <Item text='Sobre mi' to='Sobre Nosotros' />
        <Item text='Catalogo' to='Catalogo' />
        <Item text='Contacto' to='Contacto' />
      </Menu>
      <Bars3Icon onClick={toggleMenu} className='relative z-50 w-8 h-8 mr-2 text-white md:hidden' />
    </nav>
  )
}
export function NavbarHome (): JSX.Element {
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = (): void => {
    setMenuState(!menuState)
  }

  return (
    <nav className='fixed top-0 left-0 z-20 w-full flex justify-between items-center p-5 text-white text-l'>
      <div className=' absolute scroll-opacity top-0 left-0 w-full h-full bg-black z-0' />
      <h1 className='scroll-title text-2xl font-bold uppercase z-10'>Clara Photographer</h1>
      <Menu menuState={menuState}>
        <Item text='Inicio' to='/' />
        <Item text='Sobre mi' to='Sobre Nosotros' />
        <Item text='Catalogo' to='Catalogo' />
        <Item text='Contacto' to='Contacto' />
      </Menu>
      <Bars3Icon onClick={toggleMenu} className='relative z-50 w-8 h-8 mr-2 text-white md:hidden' />
    </nav>
  )
}

export function Menu ({ children, menuState }: { children: React.ReactNode, menuState: boolean }): JSX.Element {
  const menuClass = menuState ? ' translate-x-0' : ' translate-x-full'

  return (
    <ul
      className={
        'z-50 fixed right-0 top-0 transition h-screen bg-gray-950 w-60 flex flex-col gap-2 pt-20 md:relative md:w-fit md:h-fit md:flex-row md:bg-transparent md:pt-0 md:translate-x-0' +
        menuClass
      }
    >
      {children}
    </ul>
  )
}

function Item ({ text, to }: { text: string, to: string }): JSX.Element {
  return (
    <Link to={to} className='group relative px-4 py-3 cursor-pointer uppercase'>
      <h3 className='transition-all relative z-10 md:group-hover:text-black'>{text}</h3>
      <div className='transition-all absolute w-full bg-white h-1 bottom-0 left-0 z-0 group-hover:h-full hidden
      md:block'
      />
    </Link>
  )
}
