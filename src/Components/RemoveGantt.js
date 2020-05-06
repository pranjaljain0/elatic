import React from 'react'
import {Modal} from 'react-bootstrap';

function RemoveGanttModal({RemoveGantt,setRemoveGantt}) {
    return (
    <Modal
        show={RemoveGantt}
        onHide={() => setRemoveGantt(false)}
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

export default RemoveGanttModal
