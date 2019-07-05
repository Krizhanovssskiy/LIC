import React from 'react';
import { PlusBtn } from '../../../Buttons';
import DataPopup from '../DataPopup';

import './user-data.css';

const dataUserArr = [
  {
    title: 'My Website',
    type: 'text'
  },
  {
    title: 'Phone',
    type: 'number'
  },
  {
    title: 'E-mail',
    type: 'email'
  },

  ];

const UserData = () => {

  return (
    <ul className="user-data">
      {
        dataUserArr.map(({ title, type }) => (
          <li key={title}>
            <div className='data-item'>
              <span>{title}</span>
              <PlusBtn />
            </div>
            <div className='data-item popup'>
              <DataPopup type={type}/>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default UserData;