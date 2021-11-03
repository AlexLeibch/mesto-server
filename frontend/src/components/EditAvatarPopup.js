import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarInput = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  React.useEffect(() => {
    avatarInput.current.value = currentUser.avatar;
  }, [currentUser]);

  return (
    <PopupWithForm
      title="Обновить Аватар"
      name="avatarpopup"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        type="url"
        id="form-avatar"
        className="popup__field popup__field_avatar_imageUrl"
        placeholder="Ссылка на аватар"
        ref={avatarInput}
      />
      <span className="form-avatar-error" id="form-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
