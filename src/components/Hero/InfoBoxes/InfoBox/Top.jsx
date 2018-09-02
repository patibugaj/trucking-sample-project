import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 216px;
    background-color: #dededd;
    position: relative;
`

const Link = styled.a`
    padding: 13px calc(30px + 30px) 13px 30px;
    background-color: #1b2936;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
    position: absolute;
    bottom:0;
    right: 0;

    :hover {
        background-color: #006db7;
        :after {
            background-color: #037ed1;
        }
    }

    :after {
        content: '>';
        background-color: #2f3840;
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