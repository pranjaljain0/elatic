import React from 'react'
import styled from 'styled-components'
import PinCard from './PinCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Container=styled.div`
    display:flex;
    flex-direction:column;
    padding:30px;
    height:100%;
`

const TitleContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;  
`

const Title=styled.h3`
    color:#3d3d3d;
    margin:0;
`
const PinContainer=styled.div`
    flex:1;
    max-height:440px;
`

const Link=styled.div`
    background-color: #EEA835;
    color: #fff;
    font-size:200%;
    cursor:pointer;
    margin:0;
    height:40px;
    width:40px;
    border-radius:50px 50px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const CalendarContainer=styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`

function Pin() {
    return (
        <Container>
            <TitleContainer>
                <Title>Weekly Pinned</Title>
                <Link><span>+</span></Link>
            </TitleContainer>
            <PinContainer>
                <PinCard/>
                <PinCard/>
                <PinCard/>
            </PinContainer>
            <CalendarContainer>
                <Calendar />
            </CalendarContainer>
        </Container>
    )
}

export default Pin
