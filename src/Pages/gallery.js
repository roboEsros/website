import React,{Component} from 'react';
// import  axios from "../axiosInstance";
// import axios from 'axios';
import Card from "../GalleryCard";
import 'tachyons';
import "./gallery.scss";
// import MDBTab from '../mdbTab';

// const Gallery=()=>

export default class Gallery extends Component{

       constructor(props)
    {
        super(props);
        this.state={
            photos:[]
        }
        this.buildsphotos(10);
    }
    
    // componentDidMount(){
    // // axios.get("/photos")
    // axios.get("https://picsum.photos/v2/list")
    // .then(res=>{
    //     console.log(res); 
    //     this.setState({photos:res.data})
    // });
    
    // }

    componentDidMount(){
        // let i,width,height;
        // for(i=0;i<50;i++){
        //     width=this.getRandomNum(100,400);
        //     height=this.getRandomNum(100,500);
        //     this.state.photos.push({id:i,url:"https://picsum.photos/"+width+"/"+height});
        // }
        // console.log(this.state.photos);

        
    }
    
    
     getRandomNum =(max,min)=>(Math.round(Math.random() * (max - min) + min))

     buildsphotos=(num)=>{
        let i,width,height;
        for(i=0;i<num;i++){
            width=this.getRandomNum(100,400);
            height=this.getRandomNum(100,500);
            // width=200;
            // height=500;
            this.state.photos.push({id:i,url:"https://picsum.photos/"+width+"/"+height});
        }
        console.log(this.state.photos);

     }

    render(){
        // const stickRef=React.createRef();

        const photos=this.state.photos.map(
        photo=><li className='grow shadow-5 vh-50'>
        <Card  key={photo.id} src={photo.url}/>
        {/* <Card  key={photo.id} src={photo.thumbnailUrl}/> */}
        </li>
              );

    return(
        <React.Fragment>
            {/* <MDBTab ref={stickRef} message={['abc']} routes={['/abc']} /> */}

        <h1>This is Gallerypage.</h1>
        {/* <div className="flex flex-wrap debug-grid ma2 pa3 justify-center content-start "> */}
        <ul className="photo-grid ">
        {photos}
         </ul>
        {/* </div> */}
        {/* {console.log(this.state.photos)} */}
        </React.Fragment>
    );
}

}
