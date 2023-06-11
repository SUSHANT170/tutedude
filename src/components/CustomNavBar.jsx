import React from 'react';
import logo from './images/logo_jpg.webp'
import '../CSS/CustomNavBar.css'; 
import { UserOutlined , DownOutlined} from '@ant-design/icons';
import { Avatar} from 'antd';

const CustomNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__right">
        <ul className="navbar__menu">
          <li className="navbar__item" style={{opacity:0.5}}>My Assignment</li>
          <li className="navbar__item" style={{opacity:0.5}}>Chat With Mentor</li>
          <li className="navbar__item" style={{fontWeight:"bold"}}><Avatar size={20} style={{backgroundColor:'purple',margin:'5px'}} icon={<UserOutlined/>} />ProfileName <DownOutlined style={{fontSize:'10px'}}/></li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavBar