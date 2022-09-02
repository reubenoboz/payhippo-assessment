import React from "react";
import "./card.scss";

type CardT = {
  category: string;
  img: string;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;

};

const Card = ({ img, category, active, onClick }: CardT) => {
    console.log('active', active)
  return (
    <div className={`card_wrapper ${active ? 'active': ''}`} onClick={onClick}>
      <div className="card_content">
        <div className="card_image_wrapper">
          <img className="card_image" src={img} alt="" />
        </div>
        <div className="card_category">{category}</div>
      </div>
    </div>
  );
};

export default Card;
