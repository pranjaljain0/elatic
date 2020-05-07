import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from 'react-google-charts'
import NewGanttEntry from './NewGanttEntry'
import {MdEdit,MdAdd} from 'react-icons/md'
import {GrSubtract} from "react-icons/gr";
import RemoveGanttModal from './RemoveGantt'

const d = new Date()
const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' }) 
const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d)

const Container=styled.div`
    padding:20px;
`

const Title=styled.h1`
    color: #3d3d3d;
    margin:0;
    font-weight:bold;
`

const TitleDate=styled.h1`
    color: #EEA835;
    margin:0;
    font-weight:bold;
`

const ScheduleHeader=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`

const HeaderLeft=styled.div`

`

const HeaderRight=styled.div`
  display:flex;
`

const Link=styled.div`
    background-color: #EEA835;
    color: #fff;
    font-size:200%;
    cursor:pointer;
    margin:0 5px;
    height:40px;
    width:40px;
    border-radius:50px 50px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const DeleteButton=styled.div`
    background-color: #FF5B44;
    color: #fff;
    font-size:150%;
    cursor:pointer;
    margin:0 5px;
    height:40px;
    width:40px;
    border-radius:50px 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    & svg{
      fill: #fff;
    }
`

const NoteEditIcon=styled.div`
    background-color:#e5e5e5;
    color: #fff;
    font-size:150%;
    cursor:pointer;
    margin:0 5px;
    height:40px;
    width:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50px 50px;
    & svg{
        cursor:pointer;
    }
`

var datajson=[
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
  ]

  var day = new Date();
  day.setHours(0,0,0,0);
  
  var nextDay = new Date(day); 
  nextDay.setHours(24,0,0,0);

  // var datevar=['0','Day','Day',Date.parse((new Date().toDateString())+" 00:00:00 GMT+0530 (IST)"),Date.parse((new Date().toDateString())+" 23:59:59 GMT+0530 (IST)"),null,0,null,]
  var datevar=['0','Today','Today',day,nextDay,null,0,null,]

function Schedule({fetched_data}) {
  const [GanttEntry, setGanttEntry] = useState(false);
  const [GanttData, setGanttData] = useState(fetched_data[0].gantt)
  const [RemoveGantt, setRemoveGantt] = useState(false);

  const GanttHandler=(key)=>{
        setGanttData((prevData)=>{
            return prevData.filter(prevData=> prevData[0]!=key)
        })
        setGanttEntry(false)
    }

    const AddGanttHandler=(data)=>{
        setGanttData((prevData)=>{
            return [
                ...prevData,
                [...data],
            ]
        })
        setGanttEntry(false)
    }

    return (
      <>
        <Container>
          <ScheduleHeader>
            <HeaderLeft>
            <Title>Today's schedule</Title>
            <TitleDate>
                {mo+" "+da+", "+ye}
            </TitleDate>
            </HeaderLeft>
            <HeaderRight>
              <Link onClick={() => setGanttEntry(true)}><MdAdd size={24}/></Link>
              <NoteEditIcon onClick={() => setRemoveGantt(true)}><MdEdit size={24}/></NoteEditIcon>
            </HeaderRight>
            </ScheduleHeader>
            <Chart
                className="Gchart"
                chartType="Gantt"
                data={datajson.concat([datevar,...GanttData])}
                width="100%"
                height="600px"
                legendToggle
                Props={{ 'data-testid': '6' }}
                />
        </Container>
        <NewGanttEntry GanttEntry={GanttEntry} setGanttEntry={setGanttEntry} GanttData={GanttData} AddGanttHandler={AddGanttHandler}/>
        <RemoveGanttModal RemoveGantt={RemoveGantt} setRemoveGantt={setRemoveGantt} GanttData={GanttData} GanttHandler={GanttHandler}/>
        </>
    )
}

export default Schedule
