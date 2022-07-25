import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

   let postsElements = props.postData.map(p => <Post
      message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef();

   let onAddPost = () => {
      //props.dispatch(addPostActionCreator());
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
      // let action = updateNewPostTextActionCreator(text);
      // props.dispatch(action);
   }

   return (
      <div className={styles.postsBlock}>
         <h3>
            My posts
         </h3>
         <div>
            <div>
               <textarea
                  onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}
               >
               </textarea>
            </div>
            <div>
               <button onClick={onAddPost}>Add post</button>
            </div>

         </div>
         <div className={styles.item}></div>
         {postsElements}
      </div >
   )
}

export default MyPosts;