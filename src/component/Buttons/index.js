import React from 'react';
import SocialNetworkBtn from './SocialNetworks';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPlus, faShareAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

import './buttons.css';

const PlusBtn = ({className}) => (
    <div className={`round-buttons added-btn-props ${className}`}>
      <FontAwesomeIcon icon={faPlus}/>
    </div>
);

const ResetBtn = ({className}) => (
  <div className={`btn-transparent ${className}`}>
    <FontAwesomeIcon icon={faTimes}/>
  </div>
);

const CheckBtn = ({className}) => (
  <div className={`btn-transparent ${className}`}>
    <FontAwesomeIcon icon={faCheck}/>
  </div>
);

const ShareAllBtn = ({className}) => (
  <div className={`round-buttons share-all ${className}`}>
    <FontAwesomeIcon icon={faShareAlt}/>
  </div>
);

export { SocialNetworkBtn, ShareAllBtn, CheckBtn, ResetBtn, PlusBtn }


