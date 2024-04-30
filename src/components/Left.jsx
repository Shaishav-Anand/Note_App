import React, { useEffect, useState } from 'react'
import style from '../components/Left.module.css'
import Modal from 'react-modal'
import Note from './Note';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height : '25%',
      width : '30vw',
      fontFamily : 'Roboto', 
    },
  };

export default function Left() {

  
    const [modalIsOpen, setIsOpen] = useState(false);
    const [groupsArr , setGroupsArr] = useState([])
  
    function openModal() {
      setIsOpen(true);
    }

  

    function closeModal() {
        setIsOpen(false);
        // console.log("ModalInput" ,modalInput)
        setGroupsArr(prevArr => [...prevArr,modalInput])
        setModalInput("")
  
      }
    const [modalInput, setModalInput] = useState()
    function handleChange(e){
        setModalInput(e.target.value)
    }



    //!================================

    function openNote(eachItem){
        console.log(eachItem)
      }
    
 

  return (
   <div className={style.left} >
       <div className={style.headEl}>
             <h2>Pocket Notes</h2>
        </div>
       <div className={style.groups}>
            {groupsArr.map((eachItem,index)=>{
                return (
                    <div key={index} onClick={()=>openNote(eachItem)} className={style.grpItem}>
                            <div className={style.gLeft}><p>{eachItem.charAt(0).toUpperCase()+eachItem.charAt(3).toUpperCase()}</p></div>
                            <div className={style.gRight}><p>{eachItem}</p></div>
                        </div>
                )
            })}
            
            <div className={style.grpItem}>
            <button onClick={openModal} className={style.plusBtn} >+</button>
            </div>
            
            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              > 
                <p className={style.mhead}>Create New Group</p>
                <div>
                <label>Group Name</label>
                <input onChange={e => handleChange(e)} type="text" />
                </div>
                
                <div>
                    <label>Choose Color</label>
                </div>
                
                <button onClick={closeModal}>Create</button>
              </Modal>
            </div>

            

       </div>
   </div>
  )
}
