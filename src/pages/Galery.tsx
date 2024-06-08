import { useState } from 'react'
import images from '../mocks/GaleryImages.json'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Separator } from '../components/Separator'

export function Galery (): JSX.Element {
  const [imageModal, setImageModal] = useState(false)
  const [ImageSelected, setImageSelected] = useState('')

  const toggleImage = (img: string = 'no'): void => {
    setImageModal(!imageModal)
    setImageSelected(img)
  }

  return (
    <>
      <Navbar />
      <main>
        <Separator title='urbano' description='Fotos urbanas de junio de 2020' />
        <section className='columns-1 md:columns-3 px-4 '>
          {images.map(img => (
            <img onClick={() => toggleImage(img.img)} key={img.id} className='scroll-fade-up w-full h-fit py-2' src={img.img} alt='' />
          ))}
        </section>
        <ImageModal img={ImageSelected} modalState={imageModal} callback={toggleImage} />
      </main>
      <Footer />
    </>
  )
}

export function ImageModal ({ img, modalState, callback }: { img: string, modalState: boolean, callback: () => void }): JSX.Element {
  const isOpen = modalState ? ' block' : ' hidden'

  return (
    <div className={'z-50 fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center' + isOpen}>
      <button onClick={callback} className='z-20 transition-all absolute right-4 top-4 px-2 py-1 border-4 border-white rounded-md text-xl text-white uppercase md:hover:bg-white md:hover:text-black md:hover:border-black'>Cerrar</button>
      <img className='z-10 w-full h-full max-h-[75vh] md:max-h-full object-scale-down' src={img} alt='' />
      <div className='z-0 absolute bg-black opacity-90 w-full h-full ' />
    </div>
  )
}
