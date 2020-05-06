import React from 'react'
import Navigation from '../Components/Navigation'
import Panel from '../Components/Panel'
import {Row} from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container=styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
`

var day = new Date();
day.setHours(2,0,0,0);

var nextDay = new Date(day); 
nextDay.setHours(3,30,0,0);

var fetched_data=[{
    "_id": "5eb189581f4f361f05ce82c4",
    "first_name": 'Pranjal',
    "last_name": 'Jain',
    "email": 'pranjaljain0697@gmail.com',
    "password": "pass123",
    "city": 'bhopal',
    "state": 'mp',
    "country": 'in',
    "notes": [
      {"note_id": "1","note":"quis duis commodo consectetur reprehenderit velit magna id ullamco pariatur",},
    ],
    "weekly_pin": [
      {
        "pin_id": "1",
        "title": "mollit consequat",
        "description": "pariatur anim adipisicing aliquip",
        "tag": "culpa",
        "date_added": "1/1/2020"
      },
    ],
    "gantt": [
      ['1','Math','Class',day,nextDay,null,0,null,],
      
    ]
}]

function Home() {
    return (
        <Container>
            <Navigation fetched_data={fetched_data}/>
            <Row className="Content">
                <Panel type="pri" fetched_data={fetched_data}/>
                <Panel type="sec" fetched_data={fetched_data}/>
                <Panel type="ter" fetched_data={fetched_data}/>
            </Row>
        </Container>
    )
}

export default Home
