import React from "react";
import styles from './users.module.css';

let Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1, photoUrl: 'https://pickaface.net/gallery/avatar/unr_youtube_170214_2153_ypza9.png',
            followed: false, fullName: "David Bostadjyan", status: 'I am a boss', location: { city: 'Sukhum', country: 'Abkhazia' }
         },
         {
            id: 2, photoUrl: 'https://pickaface.net/gallery/avatar/unr_isagani_190126_0802_blp3.png',
            followed: false, fullName: "Eduard Grigoryan", status: 'bro', location: { city: 'Yerevan', country: 'Armenia' }
         },
         {
            id: 3, photoUrl: 'https://pickaface.net/gallery/avatar/20140927_220345_1778_Dad.png',
            followed: false, fullName: "Edgar Poshoyan", status: 'bro', location: { city: 'Sukhum', country: 'Abkhazia' }
         },
         {
            id: 4, photoUrl: 'https://wallpapercave.com/wp/wp7820023.jpg',
            followed: false, fullName: "Mia", status: 'fack you', location: { city: 'Yerevan', country: 'Armenia' }
         },
      ])
   }
   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photoUrl} className={styles.userPhoto} />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
            </span>
            <span>
               <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </span>
         </div>)
      }

   </div>
}

export default Users;