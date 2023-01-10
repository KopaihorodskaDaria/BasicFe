import React, {useState} from "react";
import '../css/Image.css';
import newHongkong from '../images/newHongkong.png'

function Image(){
    const [isVisible, setVisible]=useState(false);
    const [imageHeight, setHeight]=useState(250);
    const [imageWidth, setWidth]=useState(410);

    return(<>
        <Buttons setVisible={setVisible} setHeight={setHeight} setWidth={setWidth}></Buttons>
        {isVisible && <Img imageHeight={imageHeight} imageWidth={imageWidth}/>}</>);
};

const Buttons=({setVisible, setHeight, setWidth})=>{
    return(
        <div>
            <button onClick={() => setVisible(true)}>ADD</button>
            <button onClick={() => {setHeight(prev => prev*1.1);setWidth(prev =>prev*1.1)}}>INCREASE</button>
            <button onClick={() => {setHeight(prev => prev*0.9);setWidth(prev =>prev*0.9)}}>REDUCE</button>
            <button onClick={() => setVisible(false)}>DELETE</button>
        </div>
    );
};

const Img =({imageHeight, imageWidth})=> {
    return <img style={{width: imageWidth + 'px', height: imageHeight + 'px'}} src={newHongkong} alt='newHongkong'/>;

};

export default Image;

