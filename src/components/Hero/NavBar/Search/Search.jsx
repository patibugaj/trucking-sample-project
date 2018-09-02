import React from 'react'
import styled from 'styled-components'
import icon from './search.png'

const Div = styled.div`
    width: 100px;
    height: 100%;
    outline: 1px solid red;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Search = () => (
    <Div>
        <img src={icon} alt="Search" />
    </Div>
)

export default Search