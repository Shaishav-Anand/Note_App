import React, { useState } from 'react'
import Left from '../components/Left'
import Right from '../components/Right'
import style from '../pages/Main.module.css'




export default function Main() {


  return (
        <div className={style.main}>
            <Left  />
            <Right />
        </div>
  )
}


