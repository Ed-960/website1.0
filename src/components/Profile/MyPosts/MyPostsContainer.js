import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                let state = store.getState();
//                let addPost = () => {
//                   store.dispatch(addPostActionCreator());
//                }
//                let onPostChange = (text) => {
//                   let action = updateNewPostTextActionCreator(text);
//                   store.dispatch(action);
//                }
//                return <MyPosts
//                   updateNewPostText={onPostChange}
//                   addPostChange={addPost}
//                   postData={state.profilePage.postData}
//                   newPostText={state.profilePage.newPostText} />
//             }
//          }
//       </StoreContext.Consumer>
//    )
// }

//=========

let mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
   }

}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let action = updateNewPostTextActionCreator(text);
         dispatch(action);
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;