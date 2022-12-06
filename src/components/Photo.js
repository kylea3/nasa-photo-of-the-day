import React from "react";
import styled, { keyframes } from 'styled-components';

const HeadingDiv = styled.div`
    background-color: #D37506;
    border: 3px solid black;
`;

const kf = keyframes`
        from { width: 0 }
        to { width: 100% }
}
`

const StyledH2 = styled.h2`
    color: #fff;
    overflow: hidden; 
    white-space: nowrap; 
    margin: 0 auto; 
    letter-spacing: .15em; 
    animation: ${kf} 3.5s steps(30, end);
    padding-top: 5px;
    margin: 0px;
`;

const Styledp = styled.p`
    color: #fff;
    text-align: center;
    overflow: hidden;
    white-space: nowrap; 
    margin: 0 auto; 
    letter-spacing: .15em; 
    animation: ${kf} 3.5s steps(30, end);
    padding-bottom: 5px;
    margin: 0;
    font-weight: bold;
`

const Photo = (props) => {
    return (
    <div>    
        <img src={props.hdurl} />
        <HeadingDiv>
            <StyledH2>{props.title}</StyledH2>
            <Styledp>{props.date}</Styledp>
        </HeadingDiv>    
        <p>{props.explanation}</p>
    </div>
    )
}

export default Photo;