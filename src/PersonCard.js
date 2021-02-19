import React, { useState } from 'react';
import AddComment from './AddComment';

export default function PersonCard({person}) {
  const [comments, setComments] = React.useState([]);

  function addComm(text) {
    setComments(comments.concat([{
      text,
      id: Date.now(),
    }]));
  }

  return (
    <div className="person-card">
      <h2>{person.name}</h2>
      <p>{person.birth_year}</p>
      {comments.map(comment => (<p>{comment.text}</p>))}
      <AddComment onCreate={addComm}/>
    </div>
  )
}