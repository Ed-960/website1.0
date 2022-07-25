import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import FriendsItems from "./FriendsItems/FriendsItems";
const Navbar = () => {
   return (
      <div>
         <nav className={styles.nav}>
            <div className={styles.item}>
               <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink>
            </div>
            <div className={styles.item}>
               <NavLink to="/Dialogs" className={navData => navData.isActive ? styles.active : styles.item}>Messages</NavLink>
            </div>
            <div className={styles.item}>
               <a>News</a>
            </div>
            <div className={styles.item}>
               <a>Music</a>
            </div>
            <div className={styles.item}>
               <a>Settings</a>
            </div>
         </nav>
         {/* <FriendsItems postData={props.state.friends} /> */}
      </div>
   )
};

export default Navbar;