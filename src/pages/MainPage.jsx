import React, { Children, useEffect } from 'react';
import Hero from '../companents/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { getPopuler } from '../redux/actions/movieAction';
import { getGenres } from '../redux/actions/genreActions';
import Loader from '../companents/Loader';
import Error from '../companents/Error';
import MovieList from '../companents/MovieList';


const MainPage = () => {
  const dispatch = useDispatch();
  //ekrana basmak için abone olduk
 const { isLoading, error, genres } = useSelector((store) => store.genres);
 

  useEffect(() =>{
    dispatch(getPopuler());
    dispatch(getGenres());
  },[])
  return (
    <div>
      <Hero/>
      {
        isLoading ?  (<Loader/>) : error ? (<Error />) :(genres.map((genre)=> <MovieList key={genre.id} genre={genre}/>))
      }
    </div>
  )
}
export default MainPage;
