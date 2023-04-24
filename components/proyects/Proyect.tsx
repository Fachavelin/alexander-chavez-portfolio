import { FC } from 'react';
import { FaGithub, FaEye, FaReact, FaAngular, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNetlify } from 'react-icons/si';

interface Props {
  img: string;
  title: string;
  body: string;
  url: string;
  nextJs?: boolean;
  angular?: boolean;
  react?: boolean;
  tailwindCss?: boolean;
  netlify?: boolean;
  github?: boolean;
  githubUrl?: string;
  odd?: boolean;
}

export const Proyect: FC<Props> = ({
  img,
  title,
  body,
  url,
  odd = false,
  nextJs = false,
  angular = false,
  react = false,
  tailwindCss = false,
  netlify = false,
  github = false,
  githubUrl = '',
}) => {
  return (
    <div className='w-full grid sm:grid-cols-5 mt-3'>
      <div className={`sm:col-span-2 overflow-y-auto h-60v`}>
        <img className='w-full px-4 sm:px-0' src={img} alt='' />
      </div>
      <div className={`sm:col-span-3 p-4 ${odd && 'sm:row-start-1'}`}>
        <p className='text-2xl flex items-center gap-4'>
          {title}
          <a href={url} target='_blank' rel='noopener' className='animate-bounce text-blue-800 cursor-pointer'>
            <FaEye />
          </a>
        </p>
        <p>{body}</p>
        <div className={`flex flex-wrap gap-4 pt-3`}>
          <div className={`${!nextJs && 'hidden'} rounded-full text-[#000] bg-[#fff] p-1 text-6xl`}>
            <SiNextdotjs />
          </div>
          <div
            className={`${!react && 'hidden'} rounded-full text-[#00D8FF] bg-[#222222] p-1 text-6xl animate-spin-slow`}
          >
            <FaReact />
          </div>
          <div className={`${!angular && 'hidden'} rounded-full text-[#E23237] bg-[#FFFFFF] p-1 text-6xl`}>
            <FaAngular />
          </div>
          <div className={`${!tailwindCss && 'hidden'} rounded-full text-[#00D8FF] bg-[#fff] p-1 text-6xl`}>
            <SiTailwindcss />
          </div>
          <div className={`${!netlify && 'hidden'} rounded-full text-white bg-[#25C7B7] p-1 text-6xl`}>
            <SiNetlify />
          </div>
          <a
            href={githubUrl}
            target='_black'
            rel='noopener'
            className={`${
              !github && 'hidden'
            } rounded-full text-white bg-[#333] p-1 text-6xl  cursor-pointer hover:scale-105 transition`}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
