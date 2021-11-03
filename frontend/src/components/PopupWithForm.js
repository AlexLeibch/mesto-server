import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} && ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_${props.name}`}
          name={`${props.name}`}
          onSubmit={props.handleSubmit}
          noValidate
        >
          {props.children}
          <button className="popup__button-save" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
