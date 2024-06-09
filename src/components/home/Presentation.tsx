interface PresentationTypes {
  title: string
  description: string
  img: string
}
export function Presentation ({ title, description, img }: PresentationTypes): JSX.Element {
  return (
    <div className='w-full h-fit flex flex-col gap-4 md:flex-row overflow-x-clip'>
      <div className='scroll-fade-left text-center flex flex-col items-center justify-center p-8 md:w-5/12'>
        <h2 className='text-2xl font-bold mb-4 uppercase'>{title}</h2>
        <p className='text-xl'>{description}</p>
      </div>
      <img className='scroll-fade-right w-full h-[40vh] object-right object-cover md:w-7/12 md:h-[80vh]' src={img} alt='' />
    </div>
  )
}
