import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

const mapStateToProps = ({movies}, {match}) => {
  debugger
  return null
}

export default connect(mapStateToProps)(MovieShow);
