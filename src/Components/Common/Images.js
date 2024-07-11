import React from "react";
import css from "./Images.module.css";

function Images(props) {
  const cardData = props.data;
  function handleCardBtnClicked() {
    props.callback ? props.callback() : alert("button clicked");
  }
  return (
    <div className={css.card1}>
      {cardData.img && (
        <img src={cardData.img} className="card-img-top" alt="..." />
      )}
    </div>
  );
}

export default Images;