import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css"
import Message from "./Message/Message";

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogsData.map(
      d => <DialogItem name={d.name} key={d.id} id={d.id} />);

   let messagesElements = state.messagesData.map(
      m => <Message message={m.message} key={m.id} id={m.id} />);
   let NewmessageBody = state.NewmessageBody;

   let onSendMessageClick = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }
   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={styles.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea
                  value={NewmessageBody}
                  onChange={onNewMessageChange}
                  placeholder="Enter your message"
               >
               </textarea></div>
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
         </div>
      </div>

   )

}
export default Dialogs; 