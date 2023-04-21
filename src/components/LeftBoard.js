import React from 'react';
import './LeftBoard.css';
import logo1 from '../Icons/dashboard_icon.png';
import logo2 from '../Icons/schedule_icon.png';
import logo3 from '../Icons/setting_icon.png';
import logo4 from '../Icons/transaction_icon.png';
import logo5 from '../Icons/user_icon.png';
import RightPart from './RightPart';

function LeftBoard() {
  return (
    <div className='home'>
      <div className='left-main'>
        <p className='header'>Board.</p>
        <div className='left-mid'>
            <p className='option1'><img src={logo1} alt="#" /> Dashboard</p>
            <p className='option'><img src={logo2} alt="#" /> Transactions</p>
            <p className='option'><img src={logo3} alt="#" /> Schedules</p>
            <p className='option'><img src={logo4} alt="#" /> Users</p>
            <p className='option'><img src={logo5} alt="#" /> Settings</p>
            <p className='option-help'>Help</p>
            <p className='option-contact'>Contact Us</p>
        </div>
      </div>
      <RightPart />
    </div>
  )
}

export default LeftBoard