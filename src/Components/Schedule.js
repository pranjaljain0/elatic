import React from 'react'
import styled from 'styled-components'


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

function Schedule() {
    return (
        <Container>
            <Title>Today's schedule</Title>
            <TitleDate>
                {mo+" "+da}
            </TitleDate>
        </Container>
    )
}

export default Schedule
