import { useState } from 'react'
import {DummyImages} from "./fakedata";

import "./App.css";

function App() {
  console.log("DummyImages", DummyImages);
  const [imagesList, setImagesList] = useState(DummyImages);
  return (
    <div className='container' >
      <div className='imglist'>
        {
          imagesList.map((image, index)=>
            <div key={index} >
              <img className='avatar' src={image} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
