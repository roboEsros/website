import React from 'react';



const Home=React.forwardRef((props,ref)=>{
    return(
        <React.Fragment>
           <h1 ref={ref}>This is Homepage.</h1>
           {/* {console.log(ref)} */}
        </React.Fragment>
    );
}
)
export default Home;