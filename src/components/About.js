import React, { useEffect, useState } from 'react';
import vipul from '../images/vipul.jpg';
import githubicon from '../images/git-removebg-preview.png';
import download from '../images/download-removebg-preview.png'

function About() {
  const [text,setText]=useState('')
  const [currentIndex,setCurrentIndex]=useState(0);
  const displayText=["Software Developer","Full-Stack Developer"];

  
    useEffect(() => {
    let index = 0;
    let timer;

    const typingtext = () => {
      timer = setInterval(() => {
        if (index < displayText[currentIndex].length) {
          setText(displayText[currentIndex].slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer); 
          setTimeout(() => {
            index = 0; 
            setText(''); 
            setCurrentIndex((prevIndex) => (prevIndex + 1) % displayText.length);
            console.log(currentIndex)
            typingtext(); 
          }, 1000); 
        }
      }, 200);
    };

    typingtext(); 

    return () => clearInterval(timer); // Cleanup on component unmount

  }, [currentIndex]);
  

  
  return (
    <div className="flex flex-wrap justify-center items-center gap-20 mt-14 px-2">
      <div className='left-section flex justify-center  '>
        <div className='photo'>
          <img src={vipul} className='w-[210px] h-[250px] lg:w-[420px] lg:h-[480px] rounded-full' alt="" />
        </div>
      </div>
      <div className="max-w-xl">
        <div className="text-6xl lg:text-7xl text-white font-extrabold mb-4">Hello! 👋</div>
        <div className="text-4xl text-white font-bold mb-5">I'm Vipul</div>
        <div className='text-2xl lg:text-3xl text-white font-bold '>I'm a <span className='text-red-500 font-extrabold'>{text}</span>
        <span className="animate-pulse duration-75">|</span>
        </div>

        <div className='text-xl text-white font-medium mt-6'>
        I am a final-year Computer Engineering student from Pillai College of Engineering, passionate about web development and currently focusing on the MERN stack. I enjoy exploring new technologies and continuously expanding my skills in full-stack development.   
        </div>

        <div className='mt-5 flex flex-row justify-center items-center gap-10'>
          <a href="https://github.com/vipul279/">
            <img src={githubicon} className='w-24 hover:-translate-y-1 transition-all ease-in-out' alt="" />
          </a>
          <a href="/Vipulresume.pdf" target='_blank'>
          <button className='bg-red-700 p-3 rounded-2xl text-xl font-bold text-white hover:-translate-y-1 transition-all ease-in-out flex flex-row justify-center items-center'>Get Resume  <span><img src={download} className='w-5 ml-2' alt="" /></span></button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default About;
