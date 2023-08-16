import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';


function App() {

    const [selectedCard, setSelectedCard] = React.useState({});
    const [name, setName] = React.useState('');
    const [title, setTitle] = React.useState('');

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleEditAvatarClick = () => {
        setName('edit-profile');
        setTitle('Обновить аватар');
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    };

    const handleEditProfileClick = () => {
        setName('type_edit');
        setTitle('Редактировать профиль');
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    };

    const handleAddPlaceClick = () => {
        setName('type_add');
        setTitle('Новое место');
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    };

    const closeAllPopups = () => {
        setSelectedCard({});
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    };


  return (
    <div className="page">
        <Header />
        <Main 
         onEditProfile={handleEditProfileClick}
         onAddPlace={handleAddPlaceClick}
         onEditAvatar={handleEditAvatarClick}
         onCardClick={handleCardClick} 
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
          title={title}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={name}
          title={title}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={name}
          title={title}
        />

    </div>
  );
}

export default App;
