// import React from "react";
// import s from "./../Dialogs.module.css"
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/state";
//
// const SendMessage = (props) => {
//
//     let newMessageBody = props.newMessageBody;
//     let NewMessage = React.useRef();
//
//     let addMessage = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (e) => {
//         let body = e.target.value;
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return (
//             <div className={s.addMessageBlock}>
//                 <div>
//                     <textarea ref={NewMessage} value={newMessageBody} onChange={onNewMessageChange}></textarea>
//                 </div>
//                 <button onClick={addMessage}>Send</button>
//             </div>
//     )
// }
//
// export default SendMessage;