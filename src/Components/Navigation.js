import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'

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
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
`
const Title=styled.h1`
    margin:0;
    padding:10px 30px;
    color: #EEA835;
`

const UserNameTitle=styled.h3`
    color: #3d3d3d;
    cursor:pointer;
    margin:0;
    padding:0;
    margin-right:20px;
    text-transform:capitalize;
`

const RightSec=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    min-width:200px;
`


function Navigation({fetched_data}) {
    return (
        <Container>
            <Title>
                ELATIC
            </Title>
            <RightSec>
            <UserNameTitle>
                {fetched_data['0'].first_name}{' '}{fetched_data['0'].last_name}
            </UserNameTitle>
            <Button type="button" className="btn btn-custom" onClick={()=>{console.log('button clicked')}}>Log out</Button>
            </RightSec>
        </Container>
    )
}

export default Navigation
