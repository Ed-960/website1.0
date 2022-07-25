const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogseReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         };
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messagesData: [...state.messagesData, { id: 6, message: body }]
         };
      default:
         return state;
   }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogseReducer;