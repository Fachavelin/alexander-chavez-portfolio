import { FC, useState } from 'react';
import { MdClear, MdMenu, MdVerified } from 'react-icons/md';

interface ILink {
  title: string;
  href: string;
}

const navLinks: ILink[] = [
  {
    title: 'Inicio',
    href: '',
  },
  {
    title: 'Acerca',
    href: '',
  },
  {
    title: 'Proyectos',
    href: '',
  },
  {
    title: 'Contacto',
    href: '',
  },
];

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-gray-900 text-white shadow-md fixed w-full z-50'>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center px-10 py-2'>
        <h1 className='flex-shrink-0 flex items-center gap-2 text-2xl'>
          Alexander Chávez
          <MdVerified />
        </h1>
        <div className='hidden sm:flex gap-4 text-base'>
          {navLinks.map((l) => (
            <button key={l.title}>{l.title}</button>
          ))}
        </div>
        <button
          className='flex sm:hidden bg-gray-950 px-2 py-2 rounded color-white hover:scale-105 transition'
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClear /> : <MdMenu />}
        </button>
      </div>
      <div className={`flex flex-col ${open ? 'h-full' : 'h-0'} transition duration-1700`}>
        {navLinks.map((l) => (
          <button className={`py-2 hover:bg-gray-950 ${open ? 'scale-100' : 'scale-0'} transition`} key={l.title}>
            {l.title}
          </button>
        ))}
      </div>
    </div>
  );
};
