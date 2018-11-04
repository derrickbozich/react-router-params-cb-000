import React from 'react';
import { connect } from 'redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

const mapStateToProps = (state, ownProps) => {
  debugger
  return null
}

export default connect(mapStateToProps)(MovieShow);
