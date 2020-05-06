import React,{useEffect, useState} from 'react'
import Clock from 'react-digital-clock'
import styled from 'styled-components'
import axios from 'axios';
import { Element} from 'react-scroll'
import { RiDeleteBin6Line } from "react-icons/ri";
import {MdEdit} from 'react-icons/md'
import NewNoteEntry from './NewNoteEntry';


function getWeather(data){
    var i
    for(i in data.weather){
        return((data.weather)['0'])
    }
}

function setWeather(obj){
    if((typeof obj)=='object')
        return(obj.main)
}

function setWeatherImage(obj){
    if((typeof obj)=='object')
    return("http://openweathermap.org/img/wn/"+obj.icon+"@2x.png")
}

const Container=styled.div`
    
`

const ClockContainer=styled.div`
    background-color:aliceblue;
    margin:20px;
    padding:20px;
    border-radius:13px;
    -webkit-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.1);
    box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.1);    
    & span{
        color: #000 !important;
        font-size:200%;
    }
`

const WeatherCard=styled.div`
    width:200px;
    margin:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    & .city{
        color: #9d9d9d;
    }
    & img{
        align-self: center;
        height:50px;
        background-color:#EEA835;
        border-radius:50px 50px;
    }
`

const WeatherStatus=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    margin:20px 0px;
    & p{
        margin:0;
        padding:0;
    }
`

const Notes=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const NoteCard=styled.div`
    background-color:#EEA835;
    color: #fff;
    padding:15px 10px;
    margin:10px;
    border-radius:13px;
    display:flex;
    flex-shrink:1;
`

const NoteText=styled.div`
    flex:1;
    text-align:justify;
    & p{
        margin:0;
        padding:0;
    }
`

const NoteDelIcon=styled.div`
    
    & svg{
        background-color:#3d3d3d;
        padding:10px 10px;
        margin:0px 5px;
        border-radius:50px 50px;
        cursor:pointer;
    }
`

const NoteEditIcon=styled.div`
    
    & svg{
        background-color:#e5e5e5;
        padding:10px 10px;
        margin:0px 5px;
        border-radius:50px 50px;
        cursor:pointer;
    }
`

const NoteIcons=styled.div`
    display:flex;
    flex-direction:column;
`

const NotesHeader=styled.div`
    display:flex;
    margin:0px 10px;
    justify-content:space-between;
    align-items:center;
`

const NotesTitle=styled.h3`

`

const Link=styled.div`
    background-color: #EEA835;
    color: #fff;
    font-size:200%;
    cursor:pointer;
    margin:0;
    height:30px;
    width:30px;
    border-radius:50px 50px;
    display:flex;
    justify-content:center;
    align-items:center;
`

function RightSide({fetched_data}) {

    const [data, setData] = useState({});
    const [ModalShow, setModalShow] = useState(false)
    const [NoteData, setNoteData] = useState(fetched_data[0].notes)

    const NoteHandler=(key)=>{
        setNoteData((prevNotes)=>{
            return prevNotes.filter(Notes=> Notes.note_id!=key)
        })
    }

    const AddPinHandler=(data)=>{
        setNoteData((prevPins)=>{
            return [
                {data},
                ...prevPins
            ]
        })
    }


    useEffect(async () => {
      const result = await axios(
        'https://api.openweathermap.org/data/2.5/weather?q='+fetched_data[0].city+','+fetched_data[0].state+','+fetched_data[0].country+'&appid=9eb84c5b8b433ce11b70f5628710752b',
      );
   
      setData(result.data);
    },[]);
    
    
    var dataObj=getWeather(data)
    
    return (
        <>
        <Container>
            <ClockContainer>
                 <Clock/>
                    <WeatherCard>
                        <img src={setWeatherImage(dataObj)}></img>
                        <WeatherStatus>
                            <p>{setWeather(dataObj)}</p>
                            <p className="city">{data.name}</p>
                        </WeatherStatus>
                    </WeatherCard>
            </ClockContainer>

            <Notes>
                <NotesHeader>
                    <NotesTitle>Notes</NotesTitle>
                    <Link onClick={()=>setModalShow(true)}><span>+</span></Link>
                </NotesHeader>
            <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '400px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
                {
                    NoteData.map((item,index)=>(
                        <Element name="firstInsideContainer" key={index}>
                            <NoteCard>
                                <NoteText>
                                    <p>{item.note}</p>
                                </NoteText>
                                <NoteIcons>
                                    <NoteEditIcon>
                                        <MdEdit/>
                                    </NoteEditIcon>
                                    <NoteDelIcon>
                                        <RiDeleteBin6Line size={14} onClick={()=>NoteHandler(item.note_id)}/>
                                    </NoteDelIcon>
                                </NoteIcons>
                            </NoteCard>
                        </Element>
                            ))
                }
          </Element>
            </Notes>
        </Container>
        <NewNoteEntry ModalShow={ModalShow} setModalShow={setModalShow}/>
        </>
    )
}

export default RightSide
