import { Link } from 'react-router-dom'

interface ItemOfBigCategoriesTypes {
  title: string
  img: string
}
export function ItemOfBigCategories ({ title, img }: ItemOfBigCategoriesTypes): JSX.Element {
  return (
    <Link className='group relative z-0 h-[70vh] md:h-[120vh] w-full' to='/clara_ph/galery'>
      <h3 className='transition-all absolute bottom-6 left-6 z-20 text-white text-5xl uppercase opacity-80 md:opacity-0 md:scale-110 md:group-hover:scale-100 md:group-hover:opacity-100'>
        {title}
      </h3>
      <img
        className='transition-all absolute left-0 top-0 z-0 h-full w-full object-cover md:group-hover:blur-[1px] md:group-hover:grayscale'
        src={img}
        alt=''
      />
      <div className='absolute left-0 top-0 z-10 bg-gradient-to-t from-black w-full h-full opacity-60' />
    </Link>
  )
}
export function BigCategories (): JSX.Element {
  return (
    <div className='flex flex-col w-full md:flex-row overflow-hidden'>
      <ItemOfBigCategories
        title='Paisaje'
        img='https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUyRjE2fGVufDB8fDB8fHww'
      />
      <ItemOfBigCategories
        title='Urbano'
        img='https://i.pinimg.com/originals/f8/90/99/f89099142b1f76ff434c00ea27cc9563.jpg'
      />
    </div>
  )
}
