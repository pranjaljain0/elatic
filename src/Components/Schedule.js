import React from 'react'
import styled from 'styled-components'
import Chart from 'react-google-charts'

const d = new Date('2010-08-05')
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
    ['1','Math','Class',null,null,2*60*60*1000,100,null,],
    ['2','English','Class',null,null,3*60*60*1000,100,'1',],
    ['3','Prep','Personal',null,null,60*60*1000,14,'2',],
    ['4','GRE','Personal',null,null,2*60*60*1000,86,'2',],
    ['5','Movies','Enjoyment',null,null,60*60*1000,89,'4',],
    ['6','Music','Enjoyment',null,null,60*60*1000,100,null,],
  ]

function Schedule() {
    return (
        <Container>
            <Title>Today's schedule</Title>
            <TitleDate>
                {mo+" "+da}
            </TitleDate>
            <Chart
                className="Gchart"
                chartType="Gantt"
                data={datajson}
                width="100%"
                height="50%"
                legendToggle
                options={{
                    height: 350,
                    gantt: {
                      defaultStartDateMillis: new Date(2015, 3, 28),
                    },
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
        </Container>
    )
}

export default Schedule
