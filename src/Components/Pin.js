import React, { useState } from 'react'
import styled from 'styled-components'
import PinCard from './PinCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Element} from 'react-scroll'
import NewPinEntry from './NewPinEntry'
import {MdEdit,MdAdd} from 'react-icons/md'

const Container=styled.div`
    display:flex;
    flex-direction:column;
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
    padding:0 !important;
`
const PinContainer=styled.div`
    flex:1;
    max-height:370px;
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
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`

function Pin({fetched_data}) {

    const [ModalShow, setModalShow] = useState(false)
    const [PinData, setPinData] = useState(fetched_data[0].weekly_pin)
    
    const PinHandler=(key)=>{
        setPinData((prevPins)=>{
            return prevPins.filter(Pins=> Pins.pin_id!=key)
        })
    }

    const AddPinHandler=(data)=>{
        setPinData((prevPins)=>{
            return [
                {data},
                ...prevPins
            ]
        })
    }

    return (
        <>
        <Container>
            <TitleContainer>
                <Title>Weekly Pinned</Title>
                <Link onClick={()=>setModalShow(true)}><MdAdd size={24}/></Link>
            </TitleContainer>
            <PinContainer>
            <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '400px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
                {PinData.map((item,index)=>(
                    <Element name="firstInsideContainer" key={index}>
                        <PinCard item={item} index={index} PinHandler={PinHandler}/>
                    </Element>
                ))}
            </Element>
            </PinContainer>
            <CalendarContainer>
                <Calendar />
            </CalendarContainer>
        </Container>
        <NewPinEntry ModalShow={ModalShow}  setModalShow={setModalShow} AddPinHandler={AddPinHandler}/>
        </>
    )
}

export default Pin
