import React from 'react'
import {Modal} from 'react-bootstrap';

function NewPinEntry({ModalShow,setModalShow}) {
    return (
      <Modal
      show={ModalShow}
      onHide={() => setModalShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Large Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
    )
}

export default NewPinEntry
