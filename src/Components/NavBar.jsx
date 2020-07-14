import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './image-logo.png';



export default function ButtonAppBar() {
  return (

    <nav className={styles.topnav}>
     
      
      <img src={logo}/>
      <div>
      <Link to="/" className={styles.active}>Home</Link>
      <Link to="/product">Shop</Link>
      <Link to="/about">AboutUS</Link>
      {/* <Link to="/launchIndex">LaunchIndex</Link> */}
      </div>
    </nav>

  );
}
