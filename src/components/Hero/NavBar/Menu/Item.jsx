import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    float: left;
    padding: 10px;
`

const Link = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: #333;
    padding: 0 16px 29px 12px;

    :hover {
        border-bottom: 5px solid #006db7;
    }
`

const Item = (props) => (
    <Li><Link href='#'>{props.title}</Link></Li>
)

export default Item