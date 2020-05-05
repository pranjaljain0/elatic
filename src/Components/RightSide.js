import React,{useEffect, useState} from 'react'
import Clock from 'react-digital-clock'
import styled from 'styled-components'
import axios from 'axios';

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
    -webkit-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
    -moz-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
    box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);    
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
    & .city{
        color: #9d9d9d;
    }
    & img{
        
    }
`

const WeatherStatus=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    margin:0;
`

function RightSide() {

    const [data, setData] = useState({});
    
    useEffect(async () => {
      const result = await axios(
        'http://api.openweathermap.org/data/2.5/weather?q=bhopal,mp,in&appid=9eb84c5b8b433ce11b70f5628710752b',
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
        </Container>
    )
}

export default RightSide
