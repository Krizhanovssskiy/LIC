import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import UserData from "./UserData/index";
import { PlusBtn, ResetBtn, CheckBtn, SocialNetworkBtn, ShareAllBtn } from '../../Buttons';
import bitmap from '../../../img/Bitmap.png';

import './account-information.css';


class AccountInformation extends Component {

  render() {
    return (
      <div className="account-information">

        <div className="photo-block">
          <div className="photo-user">
            <div className="photo">
              <div className="oval">
                <FontAwesomeIcon className='path' icon={faVideo}/>
              </div>
            </div>
            <div className="change-picture">
              <FontAwesomeIcon className='shape' icon={faCamera}/>
              <span>change picture</span>
            </div>
          </div>
          <div className="bitmap">
            <div>
              <img src={bitmap} alt="bitmap"/>
            </div>
          </div>
        </div>

        <div className="user-information">
          <div className='user-inform'>
            <input type="text" name='user-name' />
            <ResetBtn />
            <CheckBtn />
          </div>
          <div className='user-inform'>
            <input type="text" name='profession' />
            <ResetBtn />
            <CheckBtn />
          </div>

          <div className="social-networks">
            <SocialNetworkBtn icon={faInstagram} className='indent' />
            <PlusBtn className='indent' />
            <ShareAllBtn className='indent' />
          </div>

          <UserData />

          <ul className='user-video'>
            <li>
              <div className="added-video">
                <FontAwesomeIcon className='path' icon={faVideo}/>
              </div>
            </li>
            <li>
              <div className="added-video">
              </div>
            </li>
            <li>
              <div className="added-video">
              </div>
            </li>
            <li>
              <div className="added-video">
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default AccountInformation;