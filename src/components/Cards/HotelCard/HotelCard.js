import React from "react";
import "./HotelCard.css";
import { FaAd } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function HotelCard(props) {
  return (
    <div>
      <div className="kartica">
        <img src={props.imgHotel} alt="slika" />
        <div className="z-index">
          <h3>{props.imeHotela}</h3>
          <p>Las Vegas strip - {props.udaljenost}mi from city center</p>
          <p>
            <b>{props.rating}</b> ({props.brocena} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
