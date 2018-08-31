import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    float: left;
    padding: 10px;
`

const Item = (props) => (
    <Li>{ props.title }</Li>
)

export default Item