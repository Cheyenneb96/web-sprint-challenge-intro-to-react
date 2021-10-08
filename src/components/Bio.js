import React from 'react'
import styled from 'styled-components'

const Info = styled.ul`
list-style-type: none;
width: 30%;
margin-left: 33%;
border: 2px solid yellow;
color: yellow;
padding: 2%;
background: black;
letter-spacing: 2px;
text-transform: uppercase;
justify-content: center;
li {
    margin-top: 10px
}
`

const Bio = ({ bio, displayBio }) => {

    
             
            
    return( 
            <div>
                <Info>
                    <li>Gender {bio.gender}</li>
                    <li>Mass {bio.mass}</li>
                    <li>Height {bio.height}</li>
                    <li>Birth Year {bio.birth_year}</li>
                </Info>
            </div>
    )
}

export default Bio