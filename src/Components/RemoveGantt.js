import React from 'react'
import {Modal,Table} from 'react-bootstrap';
import styled from 'styled-components'

const Label=styled.label`
  margin:10px;
  padding:10px;
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

function RemoveGanttModal({RemoveGantt,setRemoveGantt,GanttData,GanttHandler}) {

    const getDate=(dateVal)=>{
        const d = new Date(dateVal)
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' }) 
        const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d)
        return([mo,da,ye,dateVal.toLocaleTimeString()])
    }

    return (
    <Modal
        size="lg"
        show={RemoveGantt}
        onHide={() => setRemoveGantt(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Edit Tasks
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>

      {
      // 'Task ID'
      // 'Task Name'
      // 'Resource'
      // 'Start Date'
      // 'End Date'
      // 'Duration'
      // 'Percent Complete'
      // 'Dependencies'
    }
            <thead>
                <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Group</th>
                <th>Start date</th>
                <th>End date</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {
                GanttData.map((item,index)=>{
                    return(
                        <tr>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{getDate(item[3])[1]} {getDate(item[3])[0]}, {getDate(item[3])[2]} {getDate(item[3])[3]}</td>
                            <td>{getDate(item[4])[1]} {getDate(item[4])[0]}, {getDate(item[4])[2]} {getDate(item[4])[3]}</td>
                            <td>@mdo</td>
                        </tr>)
                })
            }
            </tbody>
            </Table>
        </Modal.Body>
      </Modal>
    )
}

export default RemoveGanttModal
