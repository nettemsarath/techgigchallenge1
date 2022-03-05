import React, { useState } from "react";
import "./index.css";

const MemeForm = ({ editMeme, handlesubmitMemeForm, cancelMemeForm }) => {
  const [memeName, setMemeName] = useState("");

  const handleChange = (event)=>{
    if(event.target.name === "memeName" ){
      setMemeName(event.target.value);
    }
  };

  return (
    <div style={ editMeme ? { display: "block" } : { display: "none" } } className='modal'>
      <div className='modalwraper'>
        <div className="form" >
          <input placeholder="Enter Meme Name" name="memeName" onChange={handleChange} />
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
