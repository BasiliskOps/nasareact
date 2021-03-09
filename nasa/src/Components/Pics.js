import React from 'react'

const Pics = props => (
    <div>
        <h3>{props.pics.title}</h3>
        <img src={props.pics.url} alt={props.pics.title} />
        <p>{props.pics.explanation}</p>
    </div>
)

export default Pics