import React from "react";
import profileAddButton from "../vendor/image/profile__add-button.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    onEditAvatar,
    onAddPlace,
    onEditProfile,
    onCardClick,
    cards,
    onCardLike,
    onCardDelete,
  } = props;

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={`${currentUser.avatar}`}
            alt="аватар профиля"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__username">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__user-description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        >
          <img
            src={profileAddButton}
            alt="кнопка добавления карточки"
            className="profile__add-image"
          />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
