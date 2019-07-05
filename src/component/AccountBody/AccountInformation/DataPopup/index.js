import React from 'react';
import {CheckBtn, ResetBtn} from "../../../Buttons";


const DataPopup = ({type}) => {
  return (
    <div>
      <input type={type} name={type}/>
      <ResetBtn className='btn-marg' />
      <CheckBtn />
    </div>
  )
}

export default DataPopup;