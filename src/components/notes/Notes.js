import React from 'react';
import propTypes from 'prop-types';

export default function Notes({ notes }) {
  const NotesListItems = notes.map((note, i) => {
    return (
      <li key={i}>
        <p>{note.text}</p>
        <p>{note.user}</p>
      </li>
    );
  });
  return (
    <ul>{NotesListItems}</ul>
  );
}

Notes.propTypes = {
  notes: propTypes.array
};
