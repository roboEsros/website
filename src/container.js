import React from "react";
import "./fade.css";
import LandingPage from "./Landing";
import { Switch, Route,withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Head from "./header";
import HomePage from "./Pages/Homepage";
import Message from "./Pages/Message";
import Gallery from "./Pages/gallery";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import "./stickNav.css";

const Container=({location})=>{

  return(

    <React.Fragment>
    <Head/>
    <div className="content">
            <TransitionGroup className="fadex transition-group">
              <CSSTransition  
              // key={location.key}
              key={location.pathname}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fadex'}          >
                    <section className="route-section">
                              <Switch location={location}>
                                <Route path="/" component={LandingPage} exact></Route>
                                <Route path="/home" component={HomePage} ></Route>
                                <Route path="/message" component={Message} ></Route>
                                <Route path="/gallery" component={Gallery}  ></Route>
                                <Route path="/about" component={About} ></Route>
                                {/* <Route path="/contact" component={Contact} ></Route> */}
                                <Route path="/contact" ><Contact/></Route>
                                <Route path="*" component={LandingPage} /> 
                                {/* for error page last one/ */}
                              </Switch>
                      </section>
            </CSSTransition>
            </TransitionGroup>
          </div>
    </React.Fragment>
    
    );
}
export default withRouter(Container);