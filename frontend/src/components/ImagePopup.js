import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_type_imagepopup ${
        props.card.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img
            src={props.card.link}
            alt={props.card.name}
            className="popup__image"
          />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
