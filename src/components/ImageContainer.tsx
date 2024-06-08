import { BigLink } from './BigLink'

export function ImageContainer ({ img }: { img: string }): JSX.Element {
  return (
    <div className='relative w-full h-screen'>
      <img className='absolute z-0 w-full h-full object-center object-cover' src={img} alt='' />
      <div className='absolute bottom-12 w-full flex justify-center'>
        <BigLink text='Ultima sesion' url='/galery' />
      </div>
    </div>
  )
}
