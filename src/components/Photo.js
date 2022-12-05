import React from "react";

const Photo = (props) => {
    return (
    <div>
        <img src={props.hdurl} />
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.explanation}</p>
    </div>
    )
}

export default Photo;