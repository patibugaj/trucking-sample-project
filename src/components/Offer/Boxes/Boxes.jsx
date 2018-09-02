import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Boxes = (props) => (
    <Container>
        {props.data
            .sort((a, b) => a.order - b.order)
            .map((offerBox) => 
                <Box 
                    key={offerBox.id}
                    icon={offerBox.icon.file.url}
                    title={offerBox.title}
                    paragraph={offerBox.description.description}
                />
            )}
    </Container>
)

export default Boxes