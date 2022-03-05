import { useState } from 'react'
import {DummyImages} from "./fakedata";

import "./App.css";

const Meme = ({addMeme})=>{
  return(
    <div className={addMeme.postion} >{addMeme.text}</div>
  )
};

const ImageComp = ({image}) => {
  const [addMeme, setAddMeme] = useState({
    text: "NNN",
    postion: "top",
  });
  return(
    <div className='imgsection' >
    <img className='avatar' src={image} />
    <Meme addMeme={addMeme} />
  </div>
  )
};

function App() {
  console.log("DummyImages", DummyImages);
  const [imagesList, setImagesList] = useState(DummyImages);
  return (
    <div className='container' >
      <div className='imglist'>
        {
          imagesList.map((image, index)=> <ImageComp key={index} image={image} /> )
        }
      </div>
    </div>
  )
}

export default App
