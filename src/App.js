import React,{Component} from 'react';
import './App.css';
import Container from "./container";
import {HashRouter} from 'react-router-dom';

// function App(props) {
//   return (
//     <div className="App">
//       </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);
    console.log(" App constructor Executed!");

  }

  state={
  }
  
  render(){
    console.log("App render executed")
  
    return( 
    <div className="h-100 w-100" >
      {/* onClick={()=>{console.log(window.pageYOffset);console.log("abc")}} */}
      <HashRouter>
          <Container/>
      </HashRouter>
        
    </div>
  )
  ;
}

}
export default App;
