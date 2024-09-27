import "./rightbar.css"
import React from 'react'
import {Users} from '../../dummyData'
import OnlineFriend from "../online/OnlineFriend"

function Rightbar() {
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img src="./assets/gift.png" alt="" className="birthdayImage" />
        <span className="birthdayText">
          <b>Jonathan</b> e <b>outros amigos</b> fazem aniversário hoje..
        </span>
      </div>
      <img src="./assets/ad1.png" alt="" className="rightbarAdImg" />
 
     <hr className="rightbarHr" />

      <p className="rightbarTitle">Contatos</p>
      <ul className="rightbarFriendList">
        {Users.filter((user)=>{
         return user.id >1
        }).map((u)=>(
          <OnlineFriend key={u.id} user={u}/>
          ))}
      </ul>
    </div>
  </div>
  )
}

export default Rightbar