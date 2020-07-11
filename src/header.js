import React, { useEffect } from 'react';
import headImage from './assets/pcb_home17.jpg';
import {MDBMask,MDBView} from 'mdbreact';
import MDBTab from './mdbTab'; 
import {useHistory,useLocation} from 'react-router-dom';

function Header(){
    
    const history=useHistory();
    const routeChange=()=>{
        history.push('');
    }
    const tabMessage=['Home','Message','Gallery','About Us','Contact Us..'];
    const tabRoute=['/home','/message','/gallery','/about','/contact'];

    const sticRef=React.createRef();
    const sticRef1=React.createRef();

    let location=useLocation();
    // useEffect(()=>{
    //   console.log(location.pathname);  
    // });

    // useEffect(()=>{console.log("StickRef=");console.log(sticRef1)} );
    useEffect(()=>{sticRef1 && sticRef.current.classList.remove("sticky");});

    return(
        <React.Fragment>
            <div className="mb3">
        {/* <h1 className="">Home</h1> */}
        {/* <img src={headImage} className="img-fluid" alt="Home Header" width="100%"/>  */}
        
        <MDBView>
            <img src={headImage} className="flex "  alt="Home Header" width="100%"/> 
            <MDBMask  className="flex-center" pattern={5}>
                <p className="white-text b f-headline-l f1-m f1-ns white-80 small-caps-ns grow" 
                onClick={routeChange}>Engineering Students Robotic Society</p>
                <p></p>
            </MDBMask>
        </MDBView>
       
       <MDBTab ref={sticRef} message={tabMessage} routes={tabRoute}/>
        
       {location.pathname.includes("gallery") &&<MDBTab ref={sticRef1} message={['2020','2019','2018','2017','2016']} 
       routes={['/gallery/2020','/gallery/2019','/gallery/2018','/gallery/2017','/gallery/2016']}/>}
       </div>
    </React.Fragment>

    );
}

export default Header;