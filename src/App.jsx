import { useState } from 'react'
import {DummyImages} from "./fakedata";
import MemeForm from "./MemeForm";

import "./App.css";

const Meme = ({addMeme})=>{
  return(
    <div className={addMeme.postion} >{addMeme.text}</div>
  )
};

const ImageComp = ({image}) => {
  const [addMeme, setAddMeme] = useState({
    text: "",
    postion: "top",
  });
  const [editMeme, setEditMeme] = useState(false);
  const handleAddMeme = ()=> setEditMeme((editMeme)=> !editMeme ); 
  const handlesubmitMemeForm = (memeName)=>{
    setAddMeme({
      text: memeName.text,
      postion: memeName.position,
    });
    setEditMeme((editMeme)=> !editMeme ); 
  };
  
  return(
    <div className='imgsection' >
      <div className='imgsection_meme' >
        <img className='avatar' src={image} />
        <Meme addMeme={addMeme} />
        </div>
      <button className='cursor' onClick={handleAddMeme} >
        Add Meme
      </button>
      {
        editMeme && <MemeForm editMeme={editMeme} handlesubmitMemeForm={handlesubmitMemeForm} cancelMemeForm={handleAddMeme} />
      }
    </div>
  )
};

function App() {
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
