import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
//! https://api.themoviedb.org/3/movie/550?api_key=681860e951e4d7ea32cea7ee3894af3d

const Main = () => {
  const API_KEY = "681860e951e4d7ea32cea7ee3894af3d";
  const urlData = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const urlForSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  //   const forMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const [movieData, setMovieData] = useState([]);

  const getMovieData = async () => {
    try {
      const response = await axios.get(urlData);
      setMovieData(response.data.results);
      console.log(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  // getMovieData();
  return <div></div>;
};

export default Main;
