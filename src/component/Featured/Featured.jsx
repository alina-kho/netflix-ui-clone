import { PlayArrowRounded } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import "./featured.scss";
import title from "./movie_title.png";

export const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Serier"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="historical">Historical</option>
            <option value="romance">Romance</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-2186-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT8-GfkDF_YEBql4JzACA9l5fKo4RjbVpWKvT964hxzY2YrSYFerR5nLhaKqsPjAgSoEEQnYoMrs-QZEeu8kSgWnDzdVdlNV5Tap.jpg?r=b52"
        alt="home banner pic"
        width="100%"
      />
      <div className="info">
        <img src={title} alt="title" />
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowRounded />
            <span>Play</span>
          </button>
          <button className="see-more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
