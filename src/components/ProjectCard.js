import React from 'react';
import linkicon from '../images/link.png';
import githubicon from '../images/github.png';

function ProjectCard({ title, image, link, github }) {
  return (
    <div className='relative group'>
       <div className="overflow-hidden relative w-[300px] h-[260px]  lg:w-[600px] lg:h-[330px] rounded-3xl">
        <img
          src={image}
          className="w-full h-full rounded-3xl"
          alt={title}
        />
        {/* Sliding Effect */}
        <div className="absolute inset-0 bg-red-800 rounded-3xl opacity-0 group-hover:opacity-90 group-hover:animate-slide duration-1000"></div>
      </div>

      

      <div className='absolute inset-0 flex justify-center gap-6 items-center opacity-0 group-hover:opacity-100 duration-100 ease-in-out transition-all'>
      <h1 className='text-2xl lg:text-5xl text-white font-extrabold'>{title}</h1>

        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img src={linkicon} alt='link icon' className=' w-8 h-8 lg:w-10 lg:h-10' />
        </a>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <img src={githubicon} alt='github icon' className=' w-8 h-8 lg:w-10 lg:h-10' />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
