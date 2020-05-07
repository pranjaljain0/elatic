import React,{useState} from 'react'
import {Modal} from 'react-bootstrap';
import styled from 'styled-components'

const InputArea=styled.div`
  display:flex;
  flex-direction:column;
`

const Textarea=styled.textarea`
  padding:20px;
  background-color:#EEA835;
  color: #fff;
  border-radius:13px;
  font-size: 1.2em;
  &::-webkit-input-placeholder{
        color: #e6e6e6;
    }
`

const Button = styled.input`
  background-color:#fff;
  font-size: 1.2em;
  padding: 0.25em 1em;
  margin: 1em;
  border: 2px solid #EEA835;
  border-radius: 3px;
  transition:all 0.3s;
  cursor:pointer;
  &:hover{
    background-color:#EEA835;
    color: #fff;
  }
`

function NewNoteEntry({ModalShow,setModalShow,AddNoteHandler}) {
  const [newNote, setnewNote] = useState('')
    return (
      <Modal
      show={ModalShow}
      onHide={() => setModalShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        Add a note
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <InputArea>
            <Textarea placeholder="Type here" onChange={(e)=>{setnewNote(e.target.value)}}/>
            <Button type="button" onClick={()=>AddNoteHandler(newNote)} value='Add Note'/>
          </InputArea>
        </form>
        </Modal.Body>
    </Modal>
    )
}

export default NewNoteEntry
