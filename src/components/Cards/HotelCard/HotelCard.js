import React from "react";
import "./HotelCard.css";
import { FaAd } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function HotelCard(props) {
  function stars(a) {
    const oneStar = <span>⭐</span>;
    const halfstar = <FaStarHalfAlt></FaStarHalfAlt>;
    const arr = [];
    for (let i = 0; i < a; i++) {
      arr.push(oneStar);
    }
    if (props.stars % 1 == 0) {
      arr.push(halfstar);
    }
    return arr;
  }
  let reaction;
  const rating = +props.rating;
  if (rating >= 5 && rating < 6) {
    reaction = "Decent!";
  } else if (rating >= 7 && rating < 8) {
    reaction = "Good!";
  } else if (rating >= 8 && rating < 9) {
    reaction = "Very Good!";
  } else if (rating >= 9 && rating <= 10) {
    reaction = "Wonderful!";
  }
  const showRecommendation = rating >= 8 ? true : false;
  return (
    <div>
      <div className="kartica">
        <img src={props.imgHotel} alt="slika" />
        <div className="z-index">
          <h3>{props.imeHotela}</h3>
          <p>{stars(props.zvezdice)}</p>
          <p>Las Vegas strip - {props.udaljenost}mi from city center</p>
          <p>
            <b>{props.rating}/10</b> {reaction} ({props.brocena} reviews)
          </p>
          {/* {showRecommendation && <p>Recommended</p>} */}
          {/* {showRecommendation ? <p>Recommended</p> : <></>} */}
        </div>
      </div>
    </div>
  );
}
