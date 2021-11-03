import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__delete-button ${
    isOwn ? "element__delete-button" : "element__delete-button_hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="elements-template">
      <div className="element card">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="element__image"
          onClick={handleClick}
        />
        <button
          className={cardDeleteButtonClassName}
          onClick={handleCardDelete}
          type="button"
        ></button>
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-button-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
