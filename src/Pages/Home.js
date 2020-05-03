import React from 'react'
import Navigation from '../Components/Navigation'
import Panel from '../Components/Panel'
import {Row} from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Row className="Content">
                <Panel primary/>
                <Panel/>
                <Panel primary/>
            </Row>
        </div>
    )
}

export default Home
