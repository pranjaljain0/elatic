import React from 'react'
import {Col} from 'react-bootstrap'
import Pin from './Pin'
import Schedule from './Schedule'
import RightSide from './RightSide'

function setType(val,fetched_data){
    if(val==="pri")
    return(
        <Col className="Panel Primary" md={12}>
            <Pin fetched_data={fetched_data}/>
        </Col>)
    else if(val==="sec")
    return(
        <Col className="Panel" md={12}>
            <Schedule fetched_data={fetched_data}/>
        </Col>)
    else if(val==="ter")
    return(
        <Col className="Panel min" md={12}>
            <RightSide fetched_data={fetched_data}/>
        </Col>)
}

function Panel({type,fetched_data}) {
    return (
        <>
            {setType(type,fetched_data)}
        </>
    )
}

export default Panel
