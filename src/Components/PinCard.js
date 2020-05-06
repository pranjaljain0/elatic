import React from 'react'
import styled from 'styled-components'
import { RiDeleteBin6Line } from "react-icons/ri";

const Card=styled.div`
    background-color:#fff;
    padding:0px;
    border-radius:13px;
    display:flex;
    margin:0px;
    transition:all 0.3s;
    &:hover{
        -webkit-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
        -moz-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
        box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.08);
    }
`

const CardIcon=styled.div`    
    background-color:#EEA835;
    height:15px;
    width:15px;
    border-radius:50px 50px;
    margin:15px 5px;
`

const CardTitle=styled.h4`
    color: #3d3d3d;
    margin:5px;
    padding:0;
    text-transform:capitalize;
`

const CardSubTitle=styled.p`
    color: #3d3d3d;
    margin:5px;
`

const PinDate=styled.p`
    font-size:80%;
    color: #6E7271;
    margin:5px;
    padding:0;
`

const CardContent=styled.div`
    flex:1;
    margin:5px;
`
const Pill=styled.div`
    margin:5px;
    & span{
        background-color:${props => props.primary?'#EEA835':'aqua'};
        color:#fff;
        font-weight:800;
        padding:5px 13px;
        border-radius:50px 50px;
        font-size:70%;
    }
`

const DeleteButton=styled.div`
    background-color: #FF5B44;
    color: #fff;
    font-size:100%;
    cursor:pointer;
    margin:10px 10px;
    height:25px;
    width:25px;
    border-radius:50px 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
`

function PinCard({item,index,PinHandler}) {
    return (
        <Card>
            <CardIcon/>
            <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardSubTitle>{item.description}</CardSubTitle>
                <PinDate>{item.date_added}</PinDate>
                <Pill primary><span>{item.tag}</span></Pill>
            </CardContent>
            <DeleteButton onClick={()=>{PinHandler(item.pin_id)}}><RiDeleteBin6Line/></DeleteButton>
        </Card>
    )
}

export default PinCard