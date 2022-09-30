import React from 'react';
import Typed from 'react-typed';
import sir from './jobs/Img/sir.png';

const AboutUs = () => {
    return ( 
        <React.Fragment>
        <div>
            <h2  className='flex-wrap text-center font-extrabold text-5xl mx-2 justify-items-center
      text-[#030303]'>OUR 
       <Typed
          className='text-[#64c1ff]  pl-2 text-5xl font-extrabold '
          strings={[' SUPERVISER.']}
          typeSpeed={120}
          backSpeed={140}
          loop
          />
          </h2>
        <img className='w-30 mx-auto mt-[4rem] rounded-md bg-transparent' src={sir} alt=''/>
      </div>

            </React.Fragment>
            
       
     );
}
 
export default AboutUs;
