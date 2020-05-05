import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Pin from './Pin'
import Schedule from './Schedule'
import RightSide from './RightSide'

function setType(val){
    if(val==="pri")
    return(
    <Col className="Panel Primary" md>
        <Pin/>
    </Col>)
    else if(val==="sec")
    return(
        <Col className="Panel" md>
            <Schedule/>
        </Col>)
    else if(val==="ter")
    return(
        <Col className="Panel min" md>
            <RightSide/>
        </Col>)
}

function Panel({type}) {
    return (
        <>
            {setType(type)}
        </>
    )
}

export default Panel
