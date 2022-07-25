import dialogseReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
   _state: {
      profilePage: {
         postData: [
            { id: 1, message: "Hi, how are you?", likesCount: 0 },
            { id: 2, message: "It \'s my first post", likesCount: 23 }
         ],
         newPostText: 'MyBstFr',
      },
      dialogsPage: {
         dialogsData: [
            { id: 1, name: "Ed" },
            { id: 2, name: "David" },
            { id: 3, name: "Edgar" },
            { id: 4, name: "Anna" },
            { id: 5, name: "Grigoriy" },
            { id: 6, name: "Tigran" },
            { id: 7, name: "Hovo" },
            { id: 8, name: "Stepan" }
         ],
         messagesData: [
            { id: 1, message: "hi" },
            { id: 2, message: "How is your di**?" },
            { id: 3, message: "yo" },
            { id: 4, message: "yo" },
            { id: 5, message: "yo" }
         ],
         newMessageBody: "",
      },
      sidebar: {
         friends: [
            { id: 1, name: "David" },
            { id: 2, name: "Edgar" },
            { id: 3, name: "Anna" }
         ]
      }
   },
   _callSubscriber() {
      console.log('state is changed');
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) { //{ type: ADD_POST }

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogseReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);

   }
}

export default store;