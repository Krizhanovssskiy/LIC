import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './social-network.css';

const SocialNetworkBtn = ({className, icon}) => (
  <div className={`social-network-block ${className}`}>
    <div className={`round-buttons link-social-network`}>
      <FontAwesomeIcon icon={icon}/>
      <div className='popup-btn'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  </div>
);

export default SocialNetworkBtn;