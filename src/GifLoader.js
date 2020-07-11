 import React,{Component} from 'react';
import GifLoader from 'react-gif-loader';
 
class ReactGifLoader extends Component {
    imageStyle={marginTop: "20%"};
    render(props) {
        return (
            <GifLoader
                loading={true}
                imageSrc={this.props.source}
                imageStyle={this.imageStyle}
                overlayBackground="rgba(0,0,0,0.5)"
            />
        );
    }
}

export default ReactGifLoader;

//Cannot make it unctional due to dependencies