import React from 'react'
import MoviesList from '../components/MoviesList'
import Search from '../components/Search'

const Home = () => {
  return (
    <div>
      <Search />
      <MoviesList />
    </div>
  );
};

export default Home
