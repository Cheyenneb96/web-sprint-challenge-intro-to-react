import React, { useState, useEffect, Fragment }  from 'react';
import styled from 'styled-components'
import Bio from './Bio'
import './character.css'

const Name = styled.h2`
width: 40%;
margin-left: 29%;
border: 2px solid yellow;
color: yellow;
padding: 2%;
background: black;
letter-spacing: 2px;
text-transform: uppercase;
display: flex;
justify-content: center;
`

const BioWrapper = styled.div`
    display: ${props => props.displayBio ? '' : 'none'}
`

const Character = ({ data, isLoaded }) =>{
    const [displayBio, setDisplayBio] = useState(false)

    const clickHandler = (event) => {
        console.log('I AM HERE')
        setDisplayBio(!displayBio)
    }
    
return(
    isLoaded ?
    data.map(char => {
        return(
            <Fragment>
            <Name onClick={clickHandler}>{char.name}</Name>
            <BioWrapper displayBio={displayBio}>
                <Bio bio={char} />
            </BioWrapper>
            </Fragment>
        )
    }) : ''
)
}

export default Character