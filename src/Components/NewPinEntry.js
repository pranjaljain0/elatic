import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition:'all 0.5s',
      borderRadius:'13px',
      padding:'20px',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)'
      },
  };

function NewPinEntry({ModalShow,setModalShow}) {
    return (
        <Modal
        isOpen={ModalShow}
        style={customStyles}
        onRequestClose={()=>{setModalShow(false)}}
        contentLabel="Pin Model">

        <h2>Hello</h2>
        <div>I am a modal</div>
        <form>
        </form>
      </Modal>
    )
}

export default NewPinEntry
