import React from 'react'
import {Modal} from 'react-bootstrap'
import styled from 'styled-components'

const ModalBody=styled.div`
    z-index:999;
    background-color:black;

    & .modal{
        z-index:999;
        background-color:black;
    }
`

function NewGanttEntry({GanttEntry,setGanttEntry}) {
    
    return (
        <ModalBody>
        <Modal
        size="lg"
        show={GanttEntry}
        onHide={() => setGanttEntry(false)}
        aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                ...
            </Modal.Body>
        </Modal>
        </ModalBody>
    )
}

export default NewGanttEntry
