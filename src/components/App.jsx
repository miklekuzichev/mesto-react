import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js'

function App() {

    const [selectedCard, setSelectedCard] = React.useState({});
    const [name, setName] = React.useState('');

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [currentUser, setCurrentUser] = React.useState(CurrentUserContext); // default value
    const [cards, setCards] = React.useState([]);

    const [isRenderLoading, setIsRenderLoading] = React.useState(false);
  //api.getUserInfo

  React.useEffect(() => {
    //
    // Загрузка готовых карточек и данных о пользователе с сервера
    //
        Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cards, userData]) => {
            setCurrentUser(userData);
            setCards(cards);
        })
        .catch(console.error);

   }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    function renderLoading() {
      setIsRenderLoading((isRenderLoading) => !isRenderLoading);
    };



    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id); // Проверяем, есть ли уже лайк на этой карточке
      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.makeLike(card._id, !isLiked)
      .then((newCard) => {
          setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
      })
      .catch(console.error);
  } 

    function handleCardDelete(card) {
      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.deleteCard(card._id)
      .then(() => {
          setCards((cards) => cards.filter((item) => item._id !== card));
      })
      .catch(console.error);
    } 

    function handleAddPlaceSubmit (card) {
      // Отправляем запрос в API
      api.addCard(card)
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch(console.error);
    } 


    const handleEditAvatarClick = () => {
        setName('edit-profile');
        setIsEditAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setName('type_edit');
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setName('type_add');
        setIsAddPlacePopupOpen(true);
    };

    const closeAllPopups = () => {
        setSelectedCard({});
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    };



    function handleUpdateUser(userData) {
      
      api.editUserInfo(userData) 
        .then((data) => {
          setCurrentUser(data);
          closeAllPopups();
        })
        .catch(console.error)
        //.finally(() => renderLoading())
    };
    
    function handleUpdateAvatar(userAvatar) {
      api.editAvatar(userAvatar)
        .then((data) => {
          setCurrentUser(data);
          closeAllPopups();
        })
        .catch(console.error)
        .finally(() => renderLoading())
    };






  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
          <Header />
          <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          cards={cards}
          onCardLike={handleCardLike}
          />
          <Footer />
          <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name={name}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            name={name}
            isRenderLoading={isRenderLoading}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name={name}
            onUpdateUser={handleUpdateUser}
            isRenderLoading={isRenderLoading}
          />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
