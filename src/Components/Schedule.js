import React from 'react'
import styled from 'styled-components'
import { Chart } from "react-google-charts";


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
    ['toTrain','Walk to train stop','walk',null,null,5 * 60 * 1000,100,null,],
    ['music','Listen to music','music',null,null,70 * 60 * 1000,100,null,],
    ['wait','Wait for train','wait',null,null,10 * 60 * 1000,100,'music',],
    ['train', 'Train ride', 'train', null, null, 45 * 60 * 1000, 75, 'wait'],
    ['toWork','Walk to work','walk',null,null,10 * 60 * 1000,0,'train',],
    ['work','Sit down at desk',null,null,null,2 * 60 * 1000,0,'toWork',],
]

function Schedule() {
    return (
        <Container>
            <Title>Today's schedule</Title>
            <TitleDate>
                {mo+" "+da}
            </TitleDate>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="Gantt"
                loader={<div>Loading Chart</div>}
                data={datajson}
                options={{
                    height: 275,
                    gantt: {
                    defaultStartDateMillis: new Date(2015, 3, 28),
                    },
                }}
                rootProps={{ 'data-testid': '4' }}
                />
        </Container>
    )
}

export default Schedule
