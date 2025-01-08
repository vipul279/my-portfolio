import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import call from '../images/call-icon-removebg-preview.png';
import email from '../images/mail-removebg-preview.png';
import location from '../images/location-removebg-preview.png'


function Contact() {
  return (
    <div id='contact' className='contact-section mt-20 mb-20 px-4'>
      <div className='h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent w-full'></div>

      <div className='heading text-4xl text-white mt-10 font-extrabold'>
        Contact
      </div>

      <div className='contact flex justify-center items-center p-10'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, 'Name must be at least 3 characters')
              .required('Name is required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Email is required'),
            message: Yup.string()
              .min(10, 'Message must be at least 10 characters')
              .required('Message is required'),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
            <Form className='w-[90%] lg:w-2/4 '>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="" className='text-white text-xl text-start'>Name:</label>
                    <Field type="text" name="name" placeholder="Enter your name" className='p-2  rounded-lg'/> 
                    <ErrorMessage name='name' component="div" className='text-red-500 mt-3 text-lg'/>               
                </div>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="" className='text-white text-xl text-start '>Email:</label>
                    <Field type="email" name="email" placeholder="Enter your mail address" className="p-2 rounded-lg"/>
                    <ErrorMessage name='email' component="div" className='text-red-500 mt-3 text-lg'/>
                </div>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="" className='text-white text-xl text-start '>Message:</label>
                    <Field as="textarea" name="message" placeholder="Enter your message" className="p-2 rounded-lg"/>
                    <ErrorMessage name='message' component="div" className='text-red-500 mt-3 text-lg'/>
                </div>
                <div className='flex justify-center mt-5'>
                    <button className='bg-red-700 text-white pl-5 pt-2 pb-2 pr-5 text-base lg:text-xl rounded-3xl'>Submit</button>
                </div>
            </Form>

        </Formik>

        
    </div>

    <div className='text-white text-xl flex flex-row flex-wrap justify-center gap-5 lg:gap-32 ml-10 mr-10'>
        <div className='font-bold flex flex-row hover:-translate-y-2 transition-all ease-in-out'>
            <a href="tel:+918657259566" className="flex items-center">
                <img src={call} className='w-10 h-10' alt="Call Icon" />
                +91 8657259566
            </a>
        </div>
        <div className='font-bold flex flex-row'>
            <a href="mailto:vipulpatel27092@gmail.com" className='flex itemms-center justify-center items-center'>
            <img src={email} className='w-10 h-10' alt="" />
            vipulpatel27092@gmail.com
            </a>
        </div>
        <div className='font-bold flex flex-row items-center'>
            <img src={location} className='w-10 h-10' alt="" />
            Airoli, Navi Mumbai
        </div>
        
        
       
    </div>
</div>
  );
}

export default Contact;
