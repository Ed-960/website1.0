import React from "react";
import styles from "./ProfileInfo.module.css"

const ProfileInfo = () => {
   return (
      <div className={styles.content}>
         <div className={styles.bg}>
            <img src="./beach.webp" />
         </div>
         <div className={styles.descriptionBlock}>
            <img src='./Best-Friend.webp' />
         </div>
      </div>
   )
};

export default ProfileInfo;