import React from "react";
import MainImg from "../assets/main.png";
import LockImg from "../assets/lock.png"
import style from "../components/Right.module.css";


export default function Right() {
  return (
    <div className={style.right}>
     
      <img src={MainImg} />
      <h1>Pocket Notes</h1>
      
      <p className={style.p1}>
        Send and receive messages without keeping your phone online.<br></br> Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={style.ete} >
        <img src={LockImg} alt="" />
        <p className={style.p2}>end to end encryption</p>
      </div>
     
    </div>
  );
}
