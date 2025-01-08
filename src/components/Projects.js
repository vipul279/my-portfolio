import React from 'react';
import ProjectCard from './ProjectCard';
import brainbash from '../images/brainbashsite.png';
import moviebooking from '../images/moviebookingsite.png';
import currencycovertor from '../images/currencyconvertor.png'

function Projects() {
  const project=[{
    "id": 1,
    "name": "Brainbash",
    "image": brainbash,
    "url": "https://brainbash-three.vercel.app/",
    "githublink":"https://github.com/vipul279/BrainBash"
  },{
    "id": 2,
    "name": "MovieBooking",
    "image": moviebooking,
    "url": "https://movieticketbookingsite27.netlify.app/",
    "githublink":"https://github.com/vipul279/moviebooking"
  },{
    "id": 3,
    "name":"CurrencyConvertor",
    "image": currencycovertor,
    "url": "https://currencyconvertorsite.netlify.app/",
    "githublink":"https://github.com/vipul279/currency-convertor"
  }];
  return (
    <div id='projects' className='project-section mt-20 mb-20'>
      <div className='h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent w-full'></div>
      <div className='heading text-4xl font-extrabold text-white mt-14'>
        Projects
      </div>
      <div className='ml-5 mr-5 mt-10 flex flex-wrap justify-center items-center gap-20'>
          {
            project.map((proj)=>(
              <ProjectCard key={proj.id} title={proj.name} image={proj.image} link={proj.url} github={proj.githublink}/>
            ))
          }
      </div>
    </div>
  )
}

export default Projects