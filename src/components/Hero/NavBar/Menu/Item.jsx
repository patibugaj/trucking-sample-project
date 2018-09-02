import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    float: left;
    padding: 10px;
`

const Link = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(51, 51, 51);
    padding: 0 16px 29px 12px;

    :hover {
        border-bottom: 5px solid rgb(0, 109, 183);
    }
`

const Item = (props) => (
    <Li><Link href='#'>{props.title}</Link></Li>
)

export default Item