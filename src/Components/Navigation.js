import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    background-color:#FFF;
`
const Title=styled.h1`
    margin:0;
    padding:30px;
    color: #EEA835;
`
function Navigation() {
    return (
        <Container>
            <Title>
                ELATIC
            </Title>
        </Container>
    )
}

export default Navigation
