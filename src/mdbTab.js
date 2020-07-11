import React from "react";
// import{useRef} from 'react';
import {useState} from 'react';
// import { BrowserRouter,Route,Switch  } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
// import './stickNav.css';

const tabs= React.forwardRef((props2,stic) => {
  
  let [stickOffset,setstickOffset]=useState(400);
  setstickOffset=()=>{
        if(stic.current.offsetTop>0)
    stickOffset=stic.current.offsetTop
  }
  

    // useEffect(()=>{
  //   console.log("abcd effect");
  //   console.log(stic);
  //   console.log(stic.current);  
  //   console.log(stic.current.offsetTop);
  //   console.log(window.pageYOffset);
    // });
  //   let location=useLocation();
  //   useEffect(()=>{location.pathname==='/gallery' &&    stic.current.classList.remove("sticky")
  // });

    // useEffect(()=>{
    //   console.log("Now in stic is:");
    //   console.log(stic);
    // });

  window.onscroll = ()=>{
    setstickOffset();
    // console.log(stick+"yu");
    if (window.pageYOffset>stickOffset) {
    stic.current.classList.add("sticky")
    // console.log(`${window.pageYOffset}and > ${stic.current.offsetTop}  is condition`)
  } else {
    stic.current.classList.remove("sticky");
    // console.log(`else ${window.pageYOffset}and > ${stic.current.offsetTop}  is condition`)
  }};

    const allTabs=props2.message.map((message,i)=>
      <MDBNavItem className='pa0.5 mr-1 grow' key={message}>
      <MDBNavLink className="white-80" to={props2.routes[i]} >{message}</MDBNavLink>
    </MDBNavItem>
    // console.log(tabs1[i] +"  tdf  "+ tabs2[i])
    );


  return(  
    <div ref={stic} >
    <MDBNav className="nav-tabs " color='blue-gradient'>
      {allTabs}
    </MDBNav>
    </div>
);
  });
  
  
  export default tabs;