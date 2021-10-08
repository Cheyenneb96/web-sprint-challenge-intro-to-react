import React, { useState, useEffect }  from 'react';
import styled from 'styled-components'
import './character.css'

const Name = styled.h1`
color: yellow;
background: black;
width: 50%

`

const Character = ({ data, isLoaded }) =>{
    
return(
    isLoaded ?
    data.map((char) => (
        <Name>{char.name}</Name>
     )) : ''
)
}

export default Character