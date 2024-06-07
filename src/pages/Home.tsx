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
    <main className='flex flex-col gap-2'>
      <Navbar />
      <div className='relative w-full h-screen'>
        <img className='absolute z-0 w-full h-full object-center object-cover' src='../../public/img/Cosplay.jpg' alt='' />
        <div className='absolute bottom-12 w-full flex justify-center'>
          <BigLink />
        </div>
      </div>

      <Presentation
        title='¡Hola! Soy Clara Acosta'
        description='Una fotógrafa apasionada y profesional. Aunque estoy empezando mi emprendimiento, tengo amplios conocimientos en fotografía. Mi objetivo es capturar momentos auténticos y especiales, haciendo que cada sesión sea cómoda y memorable para mis clientes. Me encantaría trabajar contigo para inmortalizar esos momentos que más valoras.'
        img='../../../public/img/Presentacion.jpg'
      />

      <WhyMe data={data} />
      <BigCategories />
    </main>
  )
}

interface WhyMeTypes {
  title: string
  description: string
  img: string
}
export function WhyMe ({ data }: { data: WhyMeTypes[] }): JSX.Element {
  return (
    <>
      <h1 className='text-center text-4xl my-4 text-gray-800 font-semilight'>¿Porque yo?</h1>
      <div className='w-full grid grid-cols-2 grid-rows-3 gap-8 md:gap-0 md:grid-cols-3 md:grid-rows-2 md:p-8'>
        <img className='scroll-zoom-out w-full h-full object-cover order-1 md:order-1' src={data[0].img} alt='' />
        <div className='scroll-fade-up flex flex-col text-center items-center justify-center p-8 order-2 md:order-4'>
          <h2 className='text-xl font-bold mb-4 uppercase md:text-2xl'>{data[0].title}</h2>
          <p className='text-l md:text-xl'>{data[0].description}</p>
        </div>

        <img className='scroll-zoom-out w-full h-full object-cover order-4 md:order-5' src={data[1].img} alt='' /> {/* Intercambiar cuando use md: */}
        <div className='scroll-fade-up flex flex-col text-center items-center justify-center p-8 order-3 md:order-2'> {/* Intercambiar cuando use md: */}
          <h2 className='text-xl font-bold mb-4 uppercase md:text-2xl'>{data[1].title}</h2>
          <p className='text-l md:text-xl'>{data[1].description}</p>
        </div>

        <img className='scroll-zoom-out w-full h-full object-cover order-5 md:order-3' src={data[2].img} alt='' />
        <div className='scroll-fade-up flex flex-col text-center items-center justify-center p-8 order-6 md:order-6'>
          <h2 className='text-xl font-bold mb-4 uppercase md:text-2xl'>{data[2].title}</h2>
          <p className='text-l md:text-xl'>{data[2].description}</p>
        </div>
      </div>
    </>
  )
}

interface ItemOfBigCategoriesTypes {
  title: string
  img: string
}
export function ItemOfBigCategories ({ title, img }: ItemOfBigCategoriesTypes): JSX.Element {
  return (
    <div className='group relative z-0 h-[70vh] md:h-[120vh] w-full'>
      <h3 className='transition-all absolute bottom-6 left-6 z-20 text-white text-5xl uppercase opacity-80 md:opacity-0 md:scale-110 md:group-hover:scale-100 md:group-hover:opacity-100'>
        {title}
      </h3>
      <img
        className='transition-all absolute left-0 top-0 z-0 h-full w-full object-cover md:group-hover:blur-[1px] md:group-hover:grayscale'
        src={img}
        alt=''
      />
      <div className='absolute left-0 top-0 z-10 bg-gradient-to-t from-black w-full h-full opacity-60' />
    </div>
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
        title='Paisaje'
        img='https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUyRjE2fGVufDB8fDB8fHww'
      />
    </div>
  )
}
interface PresentationTypes {
  title: string
  description: string
  img: string
}
export function Presentation ({ title, description, img }: PresentationTypes): JSX.Element {
  return (
    <div className='w-full h-fit flex flex-col gap-4 md:flex-row'>
      <div className='scroll-fade-left text-center flex flex-col items-center justify-center p-8 md:w-5/12'>
        <h2 className='text-2xl font-bold mb-4 uppercase'>{title}</h2>
        <p className='text-xl'>{description}</p>
      </div>
      <img className='scroll-fade-right w-full h-[40vh] object-right object-cover md:w-7/12 md:h-[80vh]' src={img} alt='' />
    </div>
  )
}
