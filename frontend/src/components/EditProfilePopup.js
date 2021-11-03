import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        id="form-name-input"
        type="text"
        name="name"
        placeholder="Имя"
        value={name || ""}
        onChange={handleNameChange}
        required
        minLength="2"
        maxLength="40"
        className="popup__field popup__field_type_name"
      />
      <span className="form-name-input-error"></span>
      <input
        id="form-description-input"
        type="text"
        name="description"
        placeholder="описание"
        value={description || ""}
        onChange={handleDescriptionChange}
        required
        minLength="2"
        maxLength="200"
        className="popup__field popup__field_type_description"
      />
      <span className="form-description-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
