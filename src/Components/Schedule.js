import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from 'react-google-charts'
import NewGanttEntry from './NewGanttEntry'

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

function Schedule({fetched_data}) {
  const [GanttEntry, setGanttEntry] = useState(false);
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
              <Link onClick={() => setGanttEntry(true)}><span>+</span></Link>
              <DeleteButton><span>-</span></DeleteButton>
            </HeaderRight>
            </ScheduleHeader>
            <Chart
                className="Gchart"
                chartType="Gantt"
                data={datajson.concat(fetched_data[0].gantt)}
                width="100%"
                height="400px"
                legendToggle
                options={{
                    gantt: {
                    },
                  }}
                  rootProps={{ 'data-testid': '6' }}
                />
        </Container>
        <NewGanttEntry GanttEntry={GanttEntry} setGanttEntry={setGanttEntry}/>
        </>
    )
}

export default Schedule
