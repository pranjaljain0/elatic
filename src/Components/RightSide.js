import React,{useEffect, useState} from 'react'
import Clock from 'react-digital-clock'
import styled from 'styled-components'
import axios from 'axios';
import { Element} from 'react-scroll'

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
    margin:20px 10px;
    padding:20px;
`

const NoteCard=styled.div`
    background-color:#EEA835;
    color: #fff;
    padding:10px;
    margin:5px 0px;
    border-radius:13px;
`

function RightSide({fetched_data}) {

    const [data, setData] = useState({});
    
    useEffect(async () => {
      const result = await axios(
        'https://api.openweathermap.org/data/2.5/weather?q='+fetched_data[0].city+','+fetched_data[0].state+','+fetched_data[0].country+'&appid=9eb84c5b8b433ce11b70f5628710752b',
      );
   
      setData(result.data);
    },[]);
    
    
    var dataObj=getWeather(data)
    
    return (
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
            <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '400px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
                {
                    fetched_data['0'].notes.map((item,index)=>(
                        <Element name="firstInsideContainer" key={index}>
                            <NoteCard>
                                <p>{item}</p>
                            </NoteCard>
                        </Element>
                            ))
                }
          </Element>
            </Notes>
        </Container>
    )
}

export default RightSide
