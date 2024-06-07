export function BigLink (): JSX.Element {
  return (
    <button className='relative transition-all w-fit h-fit px-2 py-3 bg-white text-3xl uppercase font-bold opacity-85 hover:scale-110 hover:-translate-y-1'>
      <p className='relative z-50'>Ultimas novedades</p>
      <div className='absolute top-0 z-0 left-0 m-2 w-full h-full border-4 border-white' />
    </button>
  )
}
