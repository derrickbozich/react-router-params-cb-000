import React from 'react';
import { connect } from 'react-redux';

const MovieShow = ({movie}) =>

  <div>
    <h3>{props.movie.title}</h3>
  </div>;

  const mapStateToProps = ({movies}, {match}) => {
    const movie = movies.find(movie => movie.id === match.params.movieId)

    if (movie) {
      return { movie }
    } else {
      return { movie: {} }
    }
  }

export default connect(mapStateToProps)(MovieShow);
