import React from "react";
import { navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ movieData }) => {
  const navigate = useNavigate();

  // console.log(movieData);

  const { title, poster_path, overview, id } = movieData;
  const imgPath = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  const notFound = `https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg`;

  return (
    <div>
      <div
        className="card border border-5"
        style={{ width: "18rem" }}
        onClick={() => navigate(`/moviedetail/${id}`)}
      >
        <img
          className="card-img-top"
          src={
            poster_path
              ? imgPath
              : "https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg"
          }
          alt=""
          style={{ width: "17.3rem", height: "23rem", borderRadius: "5px" }}
        />

        <p className="overview">{overview}</p>
        <div className="card-body">
          <h4 className="card-text text-center " style={{ height: "6rem" }}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
