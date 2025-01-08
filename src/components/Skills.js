import React from 'react';
import html from '../images/html-icon.png';
import css from  '../images/css-removebg-preview.png';
import js from  '../images/js-icon.png';
import reacticon from  '../images/react-icon-removebg-preview.png';
import tailwindicon from  '../images/tailwind-removebg-preview.png';
import mysqlicon from '../images/mysql-icon-removebg-preview.png';
import java from '../images/java-icon.png';
import giticon from '../images/git-icon.png';
import nodejs from '../images/NodeJs.svg';
import mongo from '../images/mongoDB-removebg-preview.png';
import githubicon from '../images/git-removebg-preview.png';
import express from '../images/express-removebg-preview.png'

function Skills() {
    return (
      <div id='skills' className="skills-section mt-20 mb-20">
        <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent w-full"></div>
        <div className="heading text-4xl font-extrabold text-white mt-24">
          Skills
        </div>
        <div className="relative flex flex-wrap justify-center gap-8 skills-section mx-10 mt-9 mb-24">
        <div className='w-24 lg:w-36 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in-out'>
                <img src={html} alt="" />
                 
            </div>

            <div className='w-24 lg:w-36  text-white text-lg font-medium bg-gray-900  rounded-3xl  hover:-translate-y-2 transition-all ease-in'>
                <img src={css} alt="" />
                 
            </div>

            <div className='w-24 lg:w-36 p-3 -pb-2 text-white text-lg font-medium bg-gray-900  rounded-3xl  hover:-translate-y-2 transition-all ease-in'>
                <img src={js} alt="" />
            </div>

            <div className='w-24 lg:w-36 p-2 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={reacticon} alt="" />
                 
            </div>


            <div className='w-24 lg:w-36 p-2 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={tailwindicon}  alt="" />
            </div>


            <div className='w-24 lg:w-36 p-3  text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={mysqlicon}   alt="" />
                 
            </div>

            <div className='w-24 lg:w-36 pt-5 px-2 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={nodejs} alt="" />
                 
            </div>

            <div className='w-24 lg:w-36 p-3 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={java} alt="" />
                 
            </div>

            <div className='w-24 lg:w-36 p-4 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={giticon} alt="" />
                 
            </div>

            

            <div className='w-24 lg:w-36 pl-2 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={mongo} alt="" />
                 
            </div>

            <div className='w-24 lg:w-36 pt-5 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={express} alt="" />
                 
            </div>

            <div className='w-24 lg:w-36 p-2 text-white text-lg font-medium bg-gray-900  rounded-3xl   hover:-translate-y-2 transition-all ease-in'>
                <img src={githubicon} alt="" />
                 
            </div>
        </div>
      </div>
    );
  }
  

export default Skills