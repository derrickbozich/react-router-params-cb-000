import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

  const mapStateToProps = (state, ownProps) => {
    debugger
    return {
      movieId: ownProps.match.params.movieId
    }
  }

export default connect(mapStateToProps)(MovieShow);
