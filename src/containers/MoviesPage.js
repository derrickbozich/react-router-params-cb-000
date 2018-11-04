import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew'

const MoviesPage = ({ match, movies }) =>
  <div>
    <Switch>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`} component={MovieShow}/>
      <Route path={`${match.url}/new`} component={MoviesNew}/>
    </Switch>

  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
