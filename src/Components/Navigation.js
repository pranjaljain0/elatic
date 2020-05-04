import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    background-color:#F8FAFB;
    -webkit-box-shadow: 5px 5px 40px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 5px 5px 40px 0px rgba(0,0,0,0.1);
    box-shadow: 5px 5px 40px 0px rgba(0,0,0,0.1);
    z-index:999;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0 20px 0 0;
`
const Title=styled.h1`
    margin:0;
    padding:10px 30px;
    color: #EEA835;
`

const UserNameTitle=styled.h3`
    color: #3d3d3d;
    cursor:pointer;
`

function Navigation() {
    return (
        <Container>
            <Title>
                ELATIC
            </Title>
            <UserNameTitle>
                John Doe
            </UserNameTitle>
        </Container>
    )
}

export default Navigation
