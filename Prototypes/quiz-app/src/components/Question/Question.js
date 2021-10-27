import React from 'react';

export default function Question(props) {
  return (
    <div className="question" key={props.id}>
      <h1 className="questionTitle">
        {props.title}
      </h1>

    </div>
  );
}
