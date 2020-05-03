import React from 'react'
import {Row,Col} from 'react-bootstrap'

function Panel(props) {
    return (
        <>
            {props.primary? (
                <Col className="Panel Primary">
                    <h1>A</h1>
                </Col>
            ):(
                <Col className="Panel">
                    <h1>B</h1>
                </Col>
            )}
        </>
    )
}

export default Panel
