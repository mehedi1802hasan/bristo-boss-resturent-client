import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({img,title}) => {
    return (
        <div>
             <Parallax
        blur={{ min: -35, max: 35 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
  <div>
   

  <div className=" hero h-[600px]" >
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="text-center hero-content text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold uppercase ">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  
    </div>
  </div>
</div>


  </div>
  </Parallax>
  
        </div>
    );
};

export default Cover;