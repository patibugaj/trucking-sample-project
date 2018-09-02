import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    margin: 5px 9px 0 9px;
    padding-left: 11px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid #fff;
    transition: border-color 0.2s;

    :hover {
        border-bottom: 5px solid #006db7;
    }
`

const Link = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: #333;
`

const Item = (props) => (
    <Li><Link href='#'>{props.title}</Link></Li>
)

export default Item