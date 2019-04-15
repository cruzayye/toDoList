import React from 'react';
import propTypes from 'prop-types';

export default function Note({ note }) {
  const { text, user } = note;
  return (
    <article>
      <h3>{text}</h3>
      <p>{user}</p>
    </article>
  );
}

Note.propTypes = {
  note: propTypes.object
};


