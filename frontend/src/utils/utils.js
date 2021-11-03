export { classSection, validationConfig };
const classSection = document.querySelector('.elements')
const classSectionSelector = '.elements'
const profilePopup = document.querySelector('.popup_type_profile') // редактировать профиль попапа
const profilePopupSelector = '.popup_type_profile'
const cardPopup = document.querySelector('.popup_type_cardpopup'); // редактировать попап карточек
const cardPopupSelector = '.popup_type_cardpopup'
const imagePopup = document.querySelector('.popup_type_imagepopup'); // попап открытия фотографии
const imagePopupSelector = '.popup_type_imagepopup'
const editPopupButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const addPopupButton = document.querySelector('.profile__add-button'); // кнопка добавления карточки
const closeButtonProfile = profilePopup.querySelector('.popup__button-close'); // кнопка закрытия редактирования профиля
const closeButtonCard =  cardPopup.querySelector('.popup__button-close'); // кнопка закрытия добавления карточки
const closeButtonImage = imagePopup.querySelector('.popup__button-close'); // кнопка закрытия фотографии
const closeButtonPopUp = document.querySelector('.popup__button-close')
const username = document.querySelector('.profile__username'); // имя профиля в профиле
const userNameSelector = '.profile__username'
const description = document.querySelector('.profile__user-description'); // описание профиля на странице
const descriptionSelector = '.profile__user-description'
const formElementProfile = profilePopup.querySelector('.popup__form-profile'); // форма ввода инфы в профиле
const formElementCard = cardPopup.querySelector('.popup__form-card') // форма для вставки фотографии
const nameInput = document.querySelector('.popup__field_type_name'); // поле для ввода имени
const jobInput = document.querySelector('.popup__field_type_description'); // поле для ввода описания
const inputCardPlace = cardPopup.querySelector('.popup__field_type_place'); // поле для ввода места
const inputCardUrl = cardPopup.querySelector('.popup__field_type_imageUrl'); // поле для ввода ссылки
const cardSection = document.querySelector('.elements'); // секция фотокарточек
const cardSelector = '.elements-template'
const cardTemplate = document.querySelector('.elements-template'); // template вставка
const cardButtonSave = cardPopup.querySelector('.popup__button-save')
const imageTag = document.querySelector('.popup__image');
const imageTagSelector = '.popup__image'
const imageTitle = document.querySelector('.popup__caption');
const imageTitleSelector = '.popup__caption'
const popup = document.querySelector('.popup')
const clearProfile = document.forms['popup-card']


const deletePopupSelector = '.popup_type_deleteimage'
const userId = '413b95658633c2bb86ec5848'
const popupAvatar = document.querySelector('.popup_type_avatarpopup')
const popupAvatarSelector = '.popup_type_avatarpopup'
const profileAvatar = document.querySelector('.profile__avatar')
const formAvatar = popupAvatar.querySelector('.popup__form-avatar')
const profileAvatarInput = popupAvatar.querySelector('.popup__field_avatar_imageUrl')
const updateAvatarButton = document.querySelector('.profile__avatar-edit')
const updateAvatarButtonSelector = '.profile__avatar-edit'
const avatarButtonSave = popupAvatar.querySelector('.popup__button-save')


export {
  profilePopup,
  cardPopup,
  imagePopup,
  editPopupButton,
  addPopupButton,
  closeButtonProfile,
  closeButtonCard,
  closeButtonImage,
  closeButtonPopUp,
  username,
  description,
  formElementProfile,
  formElementCard,
  nameInput,
  jobInput,
  inputCardPlace,
  inputCardUrl,
  cardSection,
  cardTemplate,
  cardButtonSave,
  imageTag,
  imageTitle,
  popup,
  clearProfile,
  imagePopupSelector,
  profilePopupSelector,
  cardSelector,
  imageTagSelector,
  imageTitleSelector,
  cardPopupSelector,
  userNameSelector,
  descriptionSelector,
  classSectionSelector,
  deletePopupSelector,
  userId,
  popupAvatar,
  popupAvatarSelector,
  profileAvatar,
  formAvatar,
  profileAvatarInput,
  updateAvatarButton,
  updateAvatarButtonSelector,
  avatarButtonSave,
  profileSelector
}

//  const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
// ];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-save',
    disabledButtonSelector: 'popup__button-disabled',
    inputErrorClass: 'popup__field-invalid',
    errorClass: 'popup__error',
    popupOpen: '.popup_opened'
  };

  const profileSelector = {
    userName: '.profile__username',
    userDescription: '.profile__user-description',
    profileAvatars: '.profile__avatar'
  }
