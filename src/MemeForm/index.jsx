import React, { useState } from "react";
import "./index.css";

const MemeForm = ({ editMeme, handlesubmitMemeForm, cancelMemeForm }) => {
  const [memeName, setMemeName] = useState({
    text: "",
    position: "top"
  });

  const handleChange = (event)=>{
    if(event.target.name === "memeName" ){
      setMemeName({
        text: event.target.value,
        position: memeName.position
      })
    }
    if(event.target.name === "position" ){
      setMemeName({
        text: memeName.text,
        position: event.target.value,
      })
    }
  };

  return (
    <div style={ editMeme ? { display: "block" } : { display: "none" } } className='modal'>
      <div className='modalwraper'>
        <div className="form" >
          <div>
            <input placeholder="Enter Meme Name" name="memeName" onChange={handleChange} />
          </div>
          <select value={memeName.position} name="position" onChange={handleChange} >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
          <div className="buttons" >
            <button onClick={ ()=>handlesubmitMemeForm(memeName) } >
              Add
            </button>
            <button onClick={cancelMemeForm} >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MemeForm;
