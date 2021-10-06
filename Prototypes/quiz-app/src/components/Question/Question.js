import React from 'react'

export default function Question(props) {
    return (
        <div key={props.id}>
            <h1>
                {props.title}
            </h1>
            
        </div>
    )
}
