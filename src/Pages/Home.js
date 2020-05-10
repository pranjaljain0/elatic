import React from 'react'
import Navigation from '../Components/Navigation'
import Panel from '../Components/Panel'
import {Row} from 'react-bootstrap'
import styled from 'styled-components'

const Container=styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
`

var day = new Date();
day.setHours(2,0,0,0);

var nextDay = new Date(day); 
nextDay.setHours(3,30,0,0);

function Home(props) {
    var fetched_data=[props.location.state]
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
