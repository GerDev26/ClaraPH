import { BigLink } from '../components/BigLink'
import { Navbar } from '../components/Navbar'

export function Home (): JSX.Element {
  const data = [
    {
      title: 'Calidad',
      description: 'Ofrecemos fotos de la más alta calidad.',
      img: 'https://ieperiodismo.com/wp-content/uploads/tipos-de-fotografias.jpg'
    },
    {
      title: 'Transparencia',
      description: 'Siempre somos claros y honestos sobre nuestros procesos y resultados.',
      img: 'https://utel.mx/blog/wp-content/uploads/2013/08/shutterstock_108638072.jpg'
    },
    {
      title: 'Precio',
      description: 'Ofrecemos precios competitivos sin comprometer la calidad.',
      img: 'https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg'
    }
  ]

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
        <div className='scroll-fade-left text-center flex flex-col items-center justify-center p-8 md:w-5/12'>
          <h2 className='text-2xl font-bold mb-4 uppercase'>Soy Clara Acosta</h2>
          <p className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id deserunt laboriosam reiciendis voluptatem, itaque cupiditate est officiis ipsam quas, sint fugiat laudantium odit quaerat cum vero iste labore officia.</p>
        </div>
        <img className='scroll-fade-right w-full h-[40vh] object-cover md:w-7/12 md:h-[80vh]' src='https://elcomercio.pe/resizer/BA--7Tcq8fIqIpF7bz-QBgUYBJQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZAGDMPPK5ZGWPERBWVHKIXXLCI.jpg' alt='' />
      </div>

      <WhyMe data={data} />

      <div className='flex flex-col w-full mt-8 md:flex-row overflow-hidden'>
        <div className='group relative z-0 h-[70vh] md:h-[120vh] w-full'>
          <h3 className='transition-all absolute bottom-6 left-6 z-20 text-white text-6xl uppercase opacity-80 md:opacity-0 md:scale-110 md:group-hover:scale-100 md:group-hover:opacity-100'>Paisajes</h3>
          <img className='transition-all absolute left-0 top-0 z-0 h-full w-full object-cover md:group-hover:blur-[2px] md:group-hover:grayscale' src='https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUyRjE2fGVufDB8fDB8fHww' alt='' />
          <div className='absolute left-0 top-0 z-10 bg-gradient-to-t from-black w-full h-full opacity-60' />
        </div>
        <div className='group relative z-0 h-[70vh] md:h-[120vh] w-full'>
          <h3 className='transition-all absolute bottom-6 left-6 z-20 text-white text-6xl uppercase opacity-80 md:opacity-0 md:scale-110 md:group-hover:scale-100 md:group-hover:opacity-100'>Retrato</h3>
          <img className='transition-all absolute left-0 top-0 h-full w-full object-cover md:group-hover:blur-[2px] md:group-hover:grayscale' src='https://images.unsplash.com/photo-1581260466152-d2c0303e54f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8OSUyRjE2fGVufDB8fDB8fHww' alt='' />
          <div className='absolute left-0 top-0 z-10 bg-gradient-to-t from-black w-full h-full opacity-60' />
        </div>
      </div>
    </>
  )
}

interface ItemOfWhymeGalery {
  title: string
  description: string
  img: string
}
export function WhyMe ({ data }: { data: ItemOfWhymeGalery[] }): JSX.Element {
  return (
    <>
      <h1 className='text-center text-4xl my-10 text-gray-800 font-semilight'>¿Porque yo?</h1>
      <div className='w-full grid grid-cols-2 grid-rows-3 gap-8 md:gap-0 md:grid-cols-3 md:grid-rows-2'>
        <img className='w-full h-full object-cover order-1 md:order-1' src={data[0].img} alt='' />
        <div className='flex flex-col text-center items-center justify-center p-8 order-2 md:order-4'>
          <h2 className='text-xl font-bold mb-4 uppercase md:text-2xl'>{data[0].title}</h2>
          <p className='text-l md:text-xl'>{data[0].description}</p>
        </div>

        <img className='w-full h-full object-cover order-4 md:order-5' src={data[1].img} alt='' /> {/* Intercambiar cuando use md: */}
        <div className='flex flex-col text-center items-center justify-center p-8 order-3 md:order-2'> {/* Intercambiar cuando use md: */}
          <h2 className='text-xl font-bold mb-4 uppercase md:text-2xl'>{data[1].title}</h2>
          <p className='text-l md:text-xl'>{data[1].description}</p>
        </div>

        <img className='w-full h-full object-cover order-5 md:order-3' src={data[2].img} alt='' />
        <div className='flex flex-col text-center items-center justify-center p-8 order-6 md:order-6'>
          <h2 className='text-xl font-bold mb-4 uppercase md:text-2xl'>{data[2].title}</h2>
          <p className='text-l md:text-xl'>{data[2].description}</p>
        </div>
      </div>
    </>
  )
}
