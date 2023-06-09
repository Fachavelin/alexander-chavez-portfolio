import { NextPage } from 'next';
import { TypeAnimation } from 'react-type-animation';
import { Hero3DModel, Navbar, Proyect, ContactForm, ContactLottie } from '@/components';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title title='Alexander Chavez Portfolio' />
      </Head>
      <div className='overflow-x-hidden'>
        {/* Header */}
        <Navbar />
        {/* Hero */}
        <div
          className='w-full grid md:grid-cols-2 sm:min-h-screen'
          style={{
            backgroundImage: "url('/images/cool-background.png')",
          }}
          id=''
        >
          <div className='flex justify-center items-center h-30v sm:h-auto mx-2 sm:mx-0'>
            <div className='text-3xl sm:text-5xl max-w-lg sm:h-auto pt-28 sm:pt-0'>
              <TypeAnimation sequence={['!Hola! Soy Alexander Chávez', 5000]} wrapper={'h1'} />
              <TypeAnimation
                sequence={[
                  'Desarrollador Front-End Jr.',
                  2000,
                  'Con conocimientos de HTML, CSS y Frameworks de Javascript',
                  2000,
                ]}
                repeat={Infinity}
                wrapper={'h2'}
              />
            </div>
          </div>
          <div className='overflow-x-hidden  h-40v sm:h-auto'>
            <Hero3DModel />
          </div>
        </div>
        {/* About me */}
        <div className='bg-gray-900 w-full sm:h-80v' id='about'>
          <div className='max-w-5xl mx-auto sm:grid grid-cols-2'>
            <div className='flex justify-center items-center'>
              <div className='relative p-4' data-aos='fade-right'>
                <img
                  src={'/images/laptop.jpg'}
                  alt={'laptop'}
                  className='w-full h-50v object-cover object-right rounded'
                />
                <img src='' alt='' />
              </div>
            </div>
            <div className='flex justify-center items-center sm:h-80v'>
              <div className=' text-white p-4 gap-1'>
                <p className='text-xl font-bold uppercase text-center sm:text-left' data-aos='fade-right'>
                  {'Sobre mi'}
                </p>
                <p className='text-2xl py-1 sm:py-0' data-aos='fade-left'>
                  Soy Ingeniero de Sistemas y Computación, con inclinación por el desarrollo web Front-End.
                </p>
                <p className='text-base text-gray-100 text-justify' data-aos='fade-right'>
                  Como desarrollador web Jr, tengo una gran predisposición por aprender el uso de nuevas tecnologías y
                  Frameworks que demanda el mercado actual. Tengo experiencia en desarrollo web a través de trabajos que
                  eh realizado de manera free-lance en los cuales he sabido desenvolverme con las distintas tecnologías
                  con las cuales he trabajado.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Proyects */}
        <div
          className='w-full'
          style={{
            backgroundImage: "url('/images/cool-background.png')",
          }}
          id='proyects'
        >
          <div className='max-w-5xl mx-auto py-8'>
            <p className='text-center sm:text-left text-xl font-bold uppercase' data-aos='fade-right'>
              {'Mis proyectos'}
            </p>
            <p className='pl-4 sm:pl-0 text-2xl pt-1' data-aos='fade-left'>
              Proyectos en los cuales he trabajado:
            </p>
            <Proyect
              img={'/images/logicielApplab.png'}
              title={'Logiciel Applab Web Page'}
              body={
                'Página web de agencia de software la cual muestra sus servicios y facilita medios de contacto para sus posibles clientes'
              }
              url={'https://www.logicielapplab.com/'}
              nextJs
              react
              tailwindCss
              netlify
              github
              githubUrl='https://github.com/Fachavelin/logicielapplab-next-tailwind'
            />
            <Proyect
              img={'/images/diveEvolutionGps.png'}
              title={'Dive Evolution Web Page'}
              body={
                'Pagina web de agencia turística la cual se especializa en ofrecer sus servicios de cursos de buceo alternativos y paquetes turísticos '
              }
              url={'https://www.diveevolutiongps.com/'}
              angular
              tailwindCss
              netlify
              github
              githubUrl='https://github.com/Fachavelin/DiveEvolutionWeb'
              odd
            />
            <Proyect
              img={'/images/nazcaTravel.png'}
              title={'Nazca Travel Web Page'}
              body={
                'Página web de agencia turística que ofrece sus servicios y paquetes turísticos, la cual aún se encuentra en desarrollo.'
              }
              url={'https://nazcatravelgps.com/'}
              nextJs
              react
              tailwindCss
              netlify
              github
              githubUrl='https://github.com/Fachavelin/nazcatravel-web'
            />
          </div>
        </div>
        {/* Contact form */}
        <div className='bg-gray-900 w-full' id='contact'>
          <div className='max-w-6xl mx-auto sm:grid grid-cols-2 pb-4'>
            <ContactForm />
            <ContactLottie />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

{
  /* <div className='flex justify-center items-center w-full h-100v bg-black'>
      <div className='text-white'>
        <p className='text-5xl animate-pulse'>Cargando</p>
        <div className='flex justify-center mt-9 text-5xl animate-spin'>
          <FaSpinner />
        </div>
      </div>
    </div> */
}
