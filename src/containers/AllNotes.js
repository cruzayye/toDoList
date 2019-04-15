import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/notes/Notes';
import PropTypes from 'prop-types';
import { getNotes } from '../actions/notes';
import { selectNotes } from '../selectors';
// import Note from '../components/notes/Note';


class AllNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes } = this.props;
    return (
      <Notes notes={notes} />
    );
  }
}

const mapStateToProps = state => ({
  notes: selectNotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getNotes());
  }
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
