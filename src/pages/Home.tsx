import { BigLink } from '../components/BigLink'
import { Navbar } from '../components/Navbar'

export function Home (): JSX.Element {
  return (
    <>
      <Navbar />
      <div className='relative w-full h-screen'>
        <img className='absolute z-0 w-full h-full object-cover' src='../../public/img/Cosplay.jpg' alt='' />
        <div className='absolute bottom-10 right-10 flex justify-center gap-8'>
          <BigLink />
        </div>
      </div>
      <div className='w-full h-screen'>
        <img className='relative z-0 w-full h-full object-cover' src='../../public/img/Cosplay.jpg' alt='' />

      </div>
      <div className='w-full h-screen'>
        <img className='relative z-0 w-full h-full object-cover' src='../../public/img/Cosplay.jpg' alt='' />

      </div>
    </>
  )
}
