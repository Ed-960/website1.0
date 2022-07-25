import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
   return (
      <div className={styles.item}>
         <img src="avatarka1.jpg" />
         {props.message}
         <div>
            <span>Like</span> {props.likesCount}
         </div>
      </div>
   )
}
export default Post;