import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogseReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogseReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer
});

let store = createStore(reducers);



export default store;