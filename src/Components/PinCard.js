import React from 'react'
import styled from 'styled-components'

const Card=styled.div`
    background-color:#fff;
    padding:20px;
    border-radius:13px;
    -webkit-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
    -moz-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
    box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
    display:flex;
    margin:15px 0px;
`

const CardIcon=styled.div`
    margin:15px 0px;
    background-color:#EEA835;
    height:25px;
    width:25px;
    border-radius:50px 50px;
`

const CardTitle=styled.h3`
    color: #3d3d3d;
    margin:0;
`

const CardSubTitle=styled.h4`
    color: #3d3d3d;
    margin:0;
`

const CardContent=styled.div`
    flex:1;
    margin:10px;
`
const Pill=styled.div`
    margin:0;

    & span{
        background-color:${props => props.primary?'bisque':'aqua'};
        padding:5px 13px;
        border-radius:50px 50px;
        font-size:70%;
    }
`

function PinCard() {
    return (
        <Card>
            <CardIcon/>
            <CardContent>
                <CardTitle>Title</CardTitle>
                <CardSubTitle>Sub Title</CardSubTitle>
            </CardContent>
            <Pill primary><span>Important</span></Pill>
        </Card>
    )
}

export default PinCard