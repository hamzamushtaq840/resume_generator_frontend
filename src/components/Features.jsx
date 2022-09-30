import React from 'react';
import { Link } from "react-router-dom";
import gresume from '../assets/gresume.png'
import companies from '../assets/companies.png'
import Recomendations from '../assets/Recomendations.png'

import Typed from 'react-typed';

function Features() {
  return (
    <React.Fragment>
    <div>
      <h1 className=' flex-wrap text-center font-extrabold text-5xl mx-2 justify-items-xenter
      text-[#64c1ff]' >
      <Typed
          className='text-[#64c1ff]  pl-2 text-5xl font-extrabold '
          strings={['APP FEATURES.']}
          typeSpeed={120}
          backSpeed={140}
          loop
          /></h1>
 <div className='w-full py-[10rem] px-4 '>
 <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
     <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg 
     hover:scale-105 duration-300'>
         <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={gresume} alt="/" />

         <h2 className='text-2xl font-bold text-center py-8'>Resume Section</h2>
         <p className='text-center text-4xl font-bold text-[#64c1ff]'>Here</p>
         <div className='text-center font-medium'>
             <p className='py-2 border-b mx-8 mt-8'>create your own Resume</p>
             <p className='py-2 border-b mx-8'>Generate ur resume</p>
             <p className='py-2 border-b mx-8'>free resume</p>
         </div>
         <button
             className="bg-[#64c1ff] w-[200px] hover:text-blue-500 hover:bg-white rounded-md font-medium my-6 mx-auto px-6 py-3">
            <Link to="/Resume">Start</Link>
          </button>
     </div>
     <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
         <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Recomendations} alt="/" />
         <h2 className='text-2xl font-bold text-center py-8'>Recomendations</h2>
         <p className='text-center text-4xl font-bold text-[#64c1ff]'>Here</p>
         <div className='text-center font-medium'>
             <p className='py-2 border-b mx-8 mt-8'>Resmume will recoment u a job</p>
             <p className='py-2 border-b mx-8'>new fresshys can find a job here</p>
             <p className='py-2 border-b mx-8'>and be recommended</p>
         </div>
         
     </div>
     <div className='w-full shadow-xl bg-black-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
         <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={companies} alt="/" />
         <h2 className='text-2xl font-bold text-center py-8'>Commpanies</h2>
         <p className='text-center text-4xl font-bold text-[#64c1ff]'>Here</p>
         <div className='text-center font-medium'>
             <p className='py-2 border-b mx-8 mt-8'>Explore different jobs</p>
             <p className='py-2 border-b mx-8'>Standard jobs</p>
             <p className='py-2 border-b mx-8'>For new bachelors</p>
         </div>
         <button
             className="bg-[#64c1ff] w-[200px] hover:text-blue-500 hover:bg-white rounded-md font-medium my-6 mx-auto px-6 py-3">
            <Link to="/Companies">Start</Link>
          </button>
     </div>
 </div>
</div>
</div>
</React.Fragment>
);
};


export default Features;
