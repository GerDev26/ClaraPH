import { BigLink } from '../components/BigLink'
import { Navbar } from '../components/Navbar'

export function Home (): JSX.Element {
  return (
    <>
      <Navbar />
      <div className='relative w-full h-screen'>
        <img className='absolute z-0 w-full h-full object-cover' src='../../public/img/Cosplay.jpg' alt='' />
        <div className='absolute bottom-12 inset-x-1 flex justify-center gap-8'>
          <BigLink />
        </div>
      </div>
      <div className='w-full h-fit flex flex-col gap-4 md:flex-row'>
        <div className='text-center flex flex-col items-center justify-center h-72 p-8 md:h-full md:w-[1500px] '>
          <h2 className='text-2xl font-bold mb-4 uppercase'>Soy Clara Acosta</h2>
          <p className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id deserunt laboriosam reiciendis voluptatem, itaque cupiditate est officiis ipsam quas, sint fugiat laudantium odit quaerat cum vero iste labore officia.</p>
        </div>
        <img className='w-full h-full object-cover' src='https://elcomercio.pe/resizer/BA--7Tcq8fIqIpF7bz-QBgUYBJQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZAGDMPPK5ZGWPERBWVHKIXXLCI.jpg' alt='' />
      </div>
      <img className='relative z-0 w-full h-full object-cover' src='../../public/img/Cosplay.jpg' alt='' />

    </>
  )
}
