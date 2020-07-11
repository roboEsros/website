// import React from "react";
// const card=(props)=>{
//     };

// export default card;

// import {  MDBCardImage} from 'mdbreact';
import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../src/Pages/gallery.scss";



const CardExample = (props) => {
  return (
            <img src={props.src} alt={props.src} height='100%'/>
    // <div className="pa1 ma1 ">
    //     <div className="grow shadow-5 vh-50" > 
    //         {/* <LazyLoadImage src={props.src} alt={props.src} height='100%' effect='opacity'/> */}
    //      </div>
    // </div>
   
  )
}

export default CardExample;

