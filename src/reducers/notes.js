import { GET_NOTES } from '../actions/notes';

const initialState = {
  notes: [{ text: 'example', user: 'me' }]

};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_NOTES:
      return {
        ...state, notes: action.payload
      };
    default: return state;
  }
}
