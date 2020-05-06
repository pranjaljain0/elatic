import React,{useState} from 'react'
import {Modal} from 'react-bootstrap';
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";


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
    width:'600px',
    height:'500px'
  },
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.8)'
    },
};

const InputArea=styled.div`
  display:flex;
  flex-direction:column;
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

const ClassText=styled.input`
  border:0px solid #fff;
  padding:5px;
  margin:10px;
  color: #fff;
  background-color:#EEA835;
  font-size: 1.2em;
  border-radius:11px;
  display:${props=>props.Selected==0?'block':'none'};
  &::-webkit-input-placeholder{
        color: #FCE26F;
    }
`

const DateSelector=styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`

const Label=styled.label`
  margin:10px;
  padding:10px;
`


      // 'Task ID'
      // 'Task Name'
      // 'Resource'
      // 'Start Date'
      // 'End Date'
      // 'Duration'
      // 'Percent Complete'
      // 'Dependencies'

function NewGanttEntry({GanttEntry,setGanttEntry,GanttData,AddGanttHandler}) {
    const [NewGanttData, setNewGanttData] = useState([])
    const [Selected, setSelected] = useState()

    var ID=[];
    var maxID;
    const getResourceArray=(data)=>{
      var arr=[]
      data.forEach(element => {
        ID.push(element[0])
        arr.push(element[2])
      });
      let unique = [...new Set(arr)];
      maxID=Math.max(...ID);
      return ["Select one","Add new",...unique,]
    }

    const getDependenciesArray=(data)=>{
      var arr=[]
      data.forEach(element => {
        arr.push(element[2])
      });
      let unique = [...new Set(arr)];
      return [,"None",...unique]
    }

    const getMaxId=(data)=>{
      var arr=[]
      data.forEach(element => {
        arr.push(element[0])
      });
      var genID=Math.max(...arr);
      return genID
    }

    const [TaskID, setTaskID] = useState(null) //done
    const [TaskName, setTaskName] = useState('') //done
    const [Resource, setResource] = useState(null)
    const [startDate, setStartDate] = useState(new Date()); //done
    const [EndDate, setEndDate] = useState(new Date()); //done
    const [Duration, setDuration] = useState(null) //done
    const [PercentComplete, setPercentComplete] = useState(null) //done
    const [Dependencies, setDependencies] = useState(null) //done

    return (
        <Modal
        show={GanttEntry}
        onHide={() => setGanttEntry(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add a new task</Modal.Title>
        </Modal.Header>
        <form>
          <InputArea>
          <Label>Title<Text placeholder="Title" type='text' onChange={(e)=>{setTaskName(e.target.value)}}/></Label>
            
            {/* <select onChange={(e)=>{e!='Add new'?setResource(e.target.value):setSelected(0)}}> */}
            <Label>Group
              <select onChange={(e)=>{
              if(e.target.value!='Add new'){
                setSelected(1)
                setResource(e.target.value)}
              else{
                setSelected(0)
              }}}>
              {
                getResourceArray(GanttData).map((item,index)=>(<option value={item}>{item}</option>))
              }
            </select></Label>
            <ClassText type='text' placeholder="Group" Selected={Selected} Num={getResourceArray(GanttData).length} onChange={(e)=>{setResource(e.target.value)}}/>
            <DateSelector>
              <Label>Start Date/Time</Label>
              <Label>End Date/Time</Label>
            </DateSelector>
            <DateSelector>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <DatePicker
                selected={EndDate}
                onChange={date => setEndDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              </DateSelector>
              {/* <select onChange={(e)=>{e!='None'?setDependencies(e.target.value):setDependencies(null)}}>
                {
                  getDependenciesArray(GanttData).map((item,index)=>(<option value={item}>{item}</option>))
                }
              </select> */}
              {/* [TaskID,TaskName,Resource,startDate,EndDate,Duration,PercentComplete,Dependencies] */}
            <Button type="button" onClick={()=>{
              AddGanttHandler([getMaxId(GanttData)+1,TaskName,Resource,startDate,EndDate,Duration,PercentComplete,Dependencies])
              }} value='Add Task'/>
          </InputArea>
        </form>
        </Modal>
    )
}

export default NewGanttEntry
