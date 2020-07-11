import React from 'react';
import 'tachyons';
// import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
// import Mdbtab from "./mdbTab";
// import { BrowserRouter } from 'react-router-dom';
// import classes from './Landing.module.css'; 
import back from "./assets/originals/arduino_original.jpg";
import bce_logo from "./assets/bhce-logo.gif";
import esros_logo from "./assets/esros_logo.png";
// import { MDBBtn, MDBNavLink } from 'mdbreact';
import {useHistory} from 'react-router-dom';

// class LandingPage extends Component
// {
// render()
// {
    const LandingPage=(props)=>{

        const history = useHistory();

        const routeChange = () =>{ 
          let path = `home`; 
          history.push(path);
        }

    return(
      <React.Fragment>
          {/* <h1>{"`\"\"</H1>\""}</h1> */}
        <div className="bg-center-ns bg-center-l h-100 w-100 top-0 bottom-0 right-0 left-0 dib cover-ns fixed"
        style={{backgroundImage:`linear-gradient(-45deg, rgba(30,87,153,1) 0%,rgba(125,185,232,0) 100%) ,url("${back}")`}}  
        onClick={routeChange}  >

            <div className="flex justify-between">
                <div><img src={bce_logo} className="" width="150"  alt="BCE_Gif_LOGO"/></div>
                <div><img src={esros_logo} className="fr" width="150" alt="esros_logo"/></div>
            </div>
            
            <div className="flex flex-column items-center justify-center ">

            
            {/* Background image could also be written as: "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),"+"url("+back+")" */}
                <div className=""></div>

                <h1 className="b f-headline white-80 ">ESRoS</h1>
                <h4 className="f-subheadline f2 white-90 small-caps-ns tc">Engineering Students Robotic Society</h4>
                <h4 className=" white-90 small-caps-ns tc">Robotics Club ,BCE Bhagalpur</h4>

                <div className="b white-80">
                        {/* <h1>Click To Continue..</h1> */}
                        {/* <button onClick={props.click}>abcd</button> */}
                        {/* <Mdbtab/> */}
                       {/* <MDBBtn><MDBNavLink to="/home">Home</MDBNavLink></MDBBtn> 
                       <MDBBtn onClick={routeChange}>Home via history</MDBBtn> */}
                       {/* <p>Click to continue</p> */}
                    </div>
                </div>
            </div>
      </React.Fragment>
    );
}
// }

export default LandingPage;