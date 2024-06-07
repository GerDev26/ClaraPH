interface WhyMeTypes {
  title: string
  description: string
  img: string
}
export function WhyMe ({ data }: { data: WhyMeTypes[] }): JSX.Element {
  return (
    <>
      <div className='w-full grid grid-cols-2 grid-rows-3 gap-8 md:gap-0 md:grid-cols-3 md:grid-rows-2 md:px-8'>
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
