// of no use

import React,{Component} from'react';
import App from './App';
// import {MDBBtn} from 'mdbreact';
import ReactGifLoader from './GifLoader';
import RoboGif from '../src/assets/Robot dance loading animation - Loading Animations - Awwwards_2.gif';
import 'tachyons';

class AppContainer extends Component
{
    constructor()
    {
        super();
        console.log("Finished Constructor!");
    }
    
    state={
        current:'None',
        loading:true
    }

   toggleHandler=()=>{
    if(this.state.current==='None')
        {this.setState({current:'Toggled!'});
        console.log(this.state.current);}
    else
        {this.setState({current:'None'});
        console.log(this.state.current);}
   }

   toggleGif=()=>{
       this.setState({loading:!this.state.loading})
       console.log("Loading="+this.state.loading);
   }
render(){
return(
<React.Fragment>
<App clickedTab={this.toggleHandler}/>
<h1>{this.state.current}</h1>
{/* <MDBBtn onClick={this.toggleHandler}>I`m A Button!</MDBBtn>
<MDBBtn onClick={this.toggleGif}>Close GifLoader</MDBBtn> */}

{this.state.loading && <ReactGifLoader source={RoboGif}/>}

</React.Fragment>
);
}

}

export default AppContainer;

