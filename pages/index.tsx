import { NextPage } from 'next';
import { TypeAnimation } from 'react-type-animation';
import { Hero3DModel, Navbar, Proyect } from '@/components';

const HomePage: NextPage = () => {
  return (
    <div className=''>
      {/* Header */}
      <Navbar />
      {/* Hero */}
      <div
        className='w-full grid md:grid-cols-2 sm:min-h-screen'
        style={{
          backgroundImage: "url('/images/cool-background.png')",
        }}
      >
        <div className='flex justify-center items-center'>
          <div className='text-5xl max-w-lg h-60v sm:h-auto'>
            <TypeAnimation sequence={['Desarrollador Front-End', 5000]} wrapper={'h2'} />
            <TypeAnimation
              sequence={[
                'Hola! Soy Alexander Chávez',
                2000,
                'Soy un apasionado desarrollador Front-end de ubicado en Ecuador',
                2000,
              ]}
              repeat={Infinity}
              wrapper={'h1'}
            />
          </div>
        </div>
        <div className='row-start-1 md:row-auto overflow-x-hidden'>
          <Hero3DModel />
        </div>
      </div>
      {/* About me */}
      <div className='bg-gray-900 w-full sm:h-80v'>
        <div className='max-w-5xl mx-auto sm:grid grid-cols-2'>
          <div className='flex justify-center items-center'>
            <div className='relative p-4'>
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
              <p className='text-xl font-bold uppercase text-center sm:text-left'>{'Sobre mi'}</p>
              <p className='text-2xl py-1 sm:py-0'>
                Soy Ingeniero de Sistemas y Computación, con inclinación por el desarrollo web Front-End.
              </p>
              <p className='text-base text-gray-100 text-justify'>
                Como desarrollador web Jr, tengo una gran predisposición por aprender el uso de nuevas técnología y
                Frameworks que demanda el mercado actual. Tengo experiencia en desarrollo web a travez de trabajos que
                eh realizado de manera free-lance en los cuales e sabido desenvolverme con las distitan tecnología con
                las cuales eh trabajado.
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
      >
        <div className='max-w-5xl mx-auto'>
          <p className='text-center sm:text-left text-xl font-bold uppercase pt-8'>{'Mis proyectos'}</p>
          <p className='pl-4 sm:pl-0 text-2xl pt-1'>Proyectos en los cuales e trabajado</p>
          <Proyect
            img={'/images/logicielApplab.png'}
            title={'Logiciel Applab Web Page'}
            url={'https://www.logicielapplab.com/'}
            nextJs
            react
            tailwindCss
            netlify
            github
            githubUrl=''
          />
          <Proyect
            img={'/images/diveEvolutionGps.png'}
            title={'Dive Evolution Web Page'}
            url={'https://www.diveevolutiongps.com/'}
            angular
            tailwindCss
            netlify
            github
            githubUrl=''
            odd
          />
          <Proyect
            img={'/images/nazcaTravel.png'}
            title={'Dive Evolution Web Page'}
            url={'https://nazcatravelgps.com/'}
            nextJs
            react
            tailwindCss
            netlify
            github
            githubUrl=''
          />
        </div>
      </div>
    </div>
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
