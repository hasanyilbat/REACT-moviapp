import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  const API_KEY = "681860e951e4d7ea32cea7ee3894af3d";
  const forMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const [getData, setGetData] = useState([]);
  const [video, setVideo] = useState([]);

  const videoData = async () => {
    try {
      const response = await axios.get(videoUrl);
      setVideo(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async () => {
    try {
      const response = await axios.get(forMovieDetails);
      setGetData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
    videoData();
  }, []);

  console.log(getData);
  return (
    <div>
      {getData.map((movie, index) => {
        const {
          title,
          poster_path,
          overview,
          release_date,
          vote_average,
          vote_count,
        } = movie;

        return (
          <div>
            <h1 className="text-center" key={index}>
              {title}
            </h1>
            {video[3].key && (
              <div className="d-flex justify-content-center mt-4">
                <ReactPlayer
                  controls
                  url={`https://www.youtube.com/watch?v=${video[3].key}`}
                />
              </div>
            )}
            <div className="container mt-4 d-flex">
              <img
                className="w-50 p-4"
                src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                alt=""
                style={{ maxHeight: "40rem" }}
              />

              <div className="info w-50 p-4">
                <div style={{ margin: "0 0 7rem 0" }}>
                  <p className="display-6">Overview</p>
                  <p>{overview}</p>
                </div>

                <div className="mt-5">
                  <p>Release Date: {release_date}</p>
                  <p>Rate: {vote_average}</p>
                  <p>Total Vote: {vote_count}</p>
                </div>
                <Link to="/">Go Back</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieDetail;
