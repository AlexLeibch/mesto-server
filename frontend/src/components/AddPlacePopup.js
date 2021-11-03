import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="cardpopup"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        type="text"
        id="form-place-input"
        name="placeName"
        placeholder="Название"
        onChange={handleChangeName}
        value={name || ""}
        minLength="2"
        maxLength="30"
        required
        className="popup__field popup__field_type_place"
      />
      <span className="form-place-input-error"></span>
      <input
        type="url"
        id="form-link-input"
        name="form-link-input"
        placeholder="Ссылка на картинку"
        onChange={handleChangeLink}
        value={link || ""}
        required
        minLength="2"
        className="popup__field popup__field_type_imageUrl"
      />
      <span className="form-link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
