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

function Home() {
    return (
        <Container>
            <Navigation/>
            <Row className="Content">
                <Panel type="pri"/>
                <Panel type="sec"/>
                <Panel type="ter"/>
            </Row>
        </Container>
    )
}

export default Home
