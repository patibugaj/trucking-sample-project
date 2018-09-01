import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 216px;
    outline: 1px solid red;
    background-color: rgb(222, 222, 221);
    position: relative;
`

const Link = styled.a`
    padding: 13px calc(30px + 30px) 13px 30px;
    background-color: rgb(27, 41, 54);
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
    position: absolute;
    bottom:0;
    right: 0;

    :hover {
        background-color: rgb(0, 109, 183);
        :after {
            background-color: rgb(3, 126, 209);
        }
    }

    :after {
        content: '>';
        background-color: rgb(47, 56, 64);
        padding: 12px 11px 13px 13px;
        position: absolute;
        top: 0;
        right: 0;
    }
`

const Top = () => (
    <Container>
        <Link>Read More</Link>
    </Container>
)

export default Top