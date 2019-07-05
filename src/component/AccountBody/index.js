import React from 'react';
import AccountInformation from './AccountInformation';
import ColumnB from '../ColumnB';
import Contacts from '../Contacts';


import './account-body.css';

const AccountBody = () => {
  return (
    <div className="account-body">
      <div className="container">
        <AccountInformation />
        <ColumnB />
        <Contacts />
      </div>
    </div>
  )
};

export default AccountBody;