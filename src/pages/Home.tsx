import { Footer } from '../components/Footer'
import { ImageContainer } from '../components/ImageContainer'
import { Navbar } from '../components/Navbar'
import { Separator } from '../components/Separator'
import { BigCategories } from '../components/home/BigCategories'
import { Presentation } from '../components/home/Presentation'
import { WhyMe } from '../components/home/WhyMe'

import WhyUs from '../mocks/WhyUs.json'

export function Home (): JSX.Element {
  return (
    <>
      <Navbar />
      <main className='flex flex-col'>
        <ImageContainer img='../../public/img/Cosplay.jpg' />
        <Separator title='Sobre mí' description='Conoce mi perfil profesional y un poco de mi vida' />

        <Presentation
          title='¡Hola! Soy Clara Acosta'
          description='Una fotógrafa apasionada y profesional. Aunque estoy empezando mi emprendimiento, tengo amplios conocimientos en fotografía. Mi objetivo es capturar momentos auténticos y especiales, haciendo que cada sesión sea cómoda y memorable para mis clientes. Me encantaría trabajar contigo para inmortalizar esos momentos que más valoras.'
          img='../../../public/img/Presentacion.jpg'
        />

        <Separator title='¿Porque nosotros?' description='Lo que mi servicio te ofrece' />

        <WhyMe data={WhyUs} />

        <Separator title='Catalogo' description='Mira mis mejores trabajos' />
        <BigCategories />
      </main>
      <Footer />
    </>
  )
}
