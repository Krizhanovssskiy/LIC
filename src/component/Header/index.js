import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBell, faUser, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './header.css';

class Header extends Component {

  state = {
    valueSearch: '',
  };

  isChange = (e) => {
    e.preventDefault();
    this.setState({
      valueSearch: e.target.value
    })
  };

  isReset = (e) => {
    e.preventDefault();
    this.setState({
      valueSearch: ''
    })
  };

  isSubmit = (e) => {
    e.preventDefault();
    this.setState({
      valueSearch: ''
    })
  };

  getLogoForm() {
    const { valueSearch } = this.state;
    return(
      <Fragment>
        <a href="#home">
          <p className='logo'>
            LIC
          </p>
        </a>
        <form
          onSubmit={this.isSubmit}
        >
          <input
            type="text"
            value={valueSearch}
            onChange={this.isChange}
            placeholder='Find your best'
          />
          <button
            className='search-btn'
          >
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          {
            valueSearch
              ? <button
                className='reset-btn'
                onClick={this.isReset}
              >
                <FontAwesomeIcon icon={faTimesCircle}/>
              </button>
              : null
          }
        </form>
      </Fragment>
    )
  }

  getNavigationBar() {
   return (
     <Fragment>
       <ul className='navigation-bar'>
         <li>
           <span>Double selfie</span>
           <FontAwesomeIcon
             className='icon'
             icon={faUserFriends}
           />
         </li>
         <li>
           <span>Notificaions</span>
           <FontAwesomeIcon
             className='icon'
             icon={faBell}
           />
         </li>
         <li>
           <span>Konstancia</span>
           <FontAwesomeIcon
             className='icon'
             icon={faUser}
           />
         </li>
       </ul>
       <p className='language'> EN</p>
     </Fragment>
   )
  }

  render() {
    return (
      <div className='header'>
        <div className='container'>

          {this.getLogoForm()}
          {this.getNavigationBar()}

        </div>
      </div>
    )
  }
};

export default Header;