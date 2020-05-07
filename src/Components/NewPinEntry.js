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

const Text=styled.input`
  border:0px solid #fff;
  padding:5px;
  margin:10px;
  background-color:#EEA835;
  color: #fff;
  font-size: 1.2em;
  border-radius:11px;
  &::-webkit-input-placeholder{
        color: #FCE26F;
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

const Label=styled.label`
  margin:10px;
  padding:10px;
`


function NewPinEntry({ModalShow,setModalShow,AddPinHandler}) {
  const [newPin, setnewPin] = useState([])
  
    return (
      <Modal
      show={ModalShow}
      onHide={() => setModalShow(false)}
      aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        Add a pin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <InputArea>
            <Label>Title<Text type='text' placeholder="Title"/></Label>
            <Label>Description</Label>
            <Textarea placeholder="Type here" onChange={(e)=>{setnewPin(e.target.value)}}/>
            <Button type="button" onClick={()=>AddPinHandler(newPin)} value='Add Pin'/>
          </InputArea>
        </form>
        </Modal.Body>
    </Modal>
    )
}

export default NewPinEntry
