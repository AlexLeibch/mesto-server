import "../index.css";
import React from "react";

import registrationAccept from "../vendor/image/AcceptRegistration.svg";
import registrationReject from "../vendor/image/RejectRegistration.svg";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { Switch, Redirect, Route, useHistory } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth";

function App() {
  const history = useHistory();

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCards] = React.useState({ isOpen: false });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isToooltipOpen, setIsTooltipOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState({ imgPath: "", text: "" });
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((elem) => elem !== card);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.data.email);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }, [history]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick({ name, link, isOpen }) {
    setSelectedCards({ name, link, isOpen: !isOpen });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCards({ isOpen: false });
    setIsTooltipOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo(name, about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard(name, link)

      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .editUserAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setEmail("");
    history.push("/sign-in");
  }

  function handleToolltipInfoOpen() {
    setIsTooltipOpen(true);
  }

  function registration({ email, password }) {
    auth
      .register(email, password)
      .then((res) => {
          handleTooltipInfo({
            imgPath: registrationAccept,
            text: "Вы успешно зарегестрированы",
          });
          handleToolltipInfoOpen();
          history.push("/sign-in");
      })
      .catch((err) => {
        handleTooltipInfo({
          imgPath: registrationReject,
          text: "Что - то пошло не так",
        });
        handleToolltipInfoOpen();
        console.log(err);
      });
  }

  function authorization({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (!data) {
          return;
        }
        setLoggedIn(true);
        setEmail(email)
        handleTooltipInfo({
          imgPath: registrationAccept,
          text: "Вы успешно авторизированы",
        });
        history.push("/");
        handleToolltipInfoOpen();
      })
      .catch((err) => {
        handleTooltipInfo({
          imgPath: registrationReject,
          text: "Что - то пошло не так",
        });
        handleToolltipInfoOpen();

        console.log(err);
      });
  }

  function handleTooltipInfo({ imgPath, text }) {
    setMessage({ imgPath, text });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__root">
          <Header
            handleSignOut={handleSignOut}
            loggedIn={loggedIn}
            email={email}
          />
          <Switch>
            <Route path="/sign-in">
              <Login authorization={authorization} />
            </Route>
            <Route path="/sign-up">
              <Register registration={registration} />
            </Route>
            <ProtectedRoute
              exact
              path="/main"
              component={Main}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
              loggedIn={loggedIn}
            ></ProtectedRoute>
            <Route path="/">
              {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <PopupWithForm
            title="Вы уверены?"
            name="remove-card"
            buttonText="Да"
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <InfoTooltip
            onClose={closeAllPopups}
            isOpen={isToooltipOpen}
            message={message}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
