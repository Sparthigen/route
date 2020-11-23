import React from "react";
import StarRatingComponent from "react-star-rating-component";

export const Search = ({ search, setRate, newRate }) => {
  const onStarClick = (nextValue, prevValue, name) => {
    setRate(nextValue);
  };

  return (
    <div className="search my-4">
      <input
        type="text"
        placeholder="Search a movie"
        onChange={(e) => search(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={newRate}
        onStarClick={onStarClick}
      />
    </div>
  );
};
