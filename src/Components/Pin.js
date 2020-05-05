import React from 'react'
import styled from 'styled-components'
import PinCard from './PinCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Element} from 'react-scroll'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`

const TitleContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 30px;
`

const Title=styled.h3`
    color:#3d3d3d;
    margin:0;
`
const PinContainer=styled.div`
    flex:1;
    max-height:430px;
    padding:0px 30px;
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
    align-self:flex-end;
`

function Pin({fetched_data}) {
    return (
        <Container>
            <TitleContainer>
                <Title>Weekly Pinned</Title>
                <Link><span>+</span></Link>
            </TitleContainer>
            <PinContainer>
            <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '400px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
                {(fetched_data[0].weekly_pin).map((item,index)=>(
                    <Element name="firstInsideContainer" key={index}>
                        <PinCard item={item} />
                    </Element>
                ))}
            </Element>
            </PinContainer>
            <CalendarContainer>
                <Calendar />
            </CalendarContainer>
        </Container>
    )
}

export default Pin
