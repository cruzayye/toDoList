import { createAction } from 'promise-middleware-redux';
import { fetchNotes }  from '../services/fetchNotes';

export const [
  getNotes,
  GET_NOTES
] = createAction('GET_NOTES', fetchNotes);
