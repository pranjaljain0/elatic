import React,{useEffect, useState} from 'react'
import Clock from 'react-digital-clock'
import styled from 'styled-components'
import axios from 'axios';

const Container=styled.div`
    
`

const ClockContainer=styled.div`
    background-color:#fff;
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
function getWeather(data){
    var i
    for(i in data.weather){
        return((data.weather)['0'])
    }
}

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
                 {
                     console.log(dataObj)
                 }
                <span>{data.name}</span>
            </ClockContainer>
        </Container>
    )
}

export default RightSide
