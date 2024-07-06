import React from 'react';

function CircleCard(props) {
    const cardData = props.data;
    function handleCardBtnClicked () {
        props.callback ? props.callback() : alert("button clicked");
    }
    return (
        <div className="card">
           {cardData.img && <img src={cardData.img} className="card-img-top" alt="..." />}
            <div className="card-body">
            { cardData.title && <h5 className="card-title">{cardData.title}</h5>}
            {cardData.description &&<p className="card-text">{cardData.description}</p>}
            {cardData.link && <a href="javascript:void(0)" onClick={()=>{handleCardBtnClicked()}} className="btn btn-primary">{cardData.linkText}</a>}
            </div>
        </div>
    );
}

export default CircleCard;