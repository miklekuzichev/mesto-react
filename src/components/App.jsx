import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

    const [selectedCard, setSelectedCard] = React.useState({});
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [title, setTitle] = React.useState('');

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleEditAvatarClick = () => {
        setIsOpen(!isOpen);
        setName('edit-profile');
        setTitle('Обновить аватар');
    };

    const handleEditProfileClick = () => {
        setIsOpen(!isOpen);
        setName('type_edit');
        setTitle('Редактировать профиль');
    };

    const handleAddPlaceClick = () => {
        setIsOpen(!isOpen);
        setName('type_add');
        setTitle('Новое место');
    };

    const closeAllPopups = () => {
        setIsOpen(false);
        setSelectedCard({});
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
        <PopupWithForm 
         isOpen={isOpen}
         onClose={closeAllPopups}
         name={name}
         title={title}
         >
         {name === 'edit-profile' ? 
         <fieldset className="popup__fieldset">
            <input type='url' name="imagelink" id="imageLinkProfile" placeholder="Ссылка на картинку" className="popup__input popup__input_type_imageurl" required/>
            <span className="popup__error imageLinkProfile-error"></span>
            <button type='submit' className="popup__button">
                Сохранить
            </button>
            </fieldset> : name === 'type_add' ?
        <fieldset className="popup__fieldset">
            <input type='text' name="imagename" id="imageName" placeholder="Название" minLength="2" maxLength="30" className="popup__input popup__input_type_imagename" required/>
            <span className="popup__error imageName-error"></span>
            <input type='url' name="imagelink" id="imageLink" placeholder="Ссылка на картинку" className="popup__input popup__input_type_imageurl" required/>
            <span className="popup__error imageLink-error"></span>
            <button type='submit' className="popup__button">
                Создать
            </button>
        </fieldset> : 
        <fieldset className="popup__fieldset">
            <input type='text' name="username" id="name" placeholder="Иван Иванов" minLength="2" maxLength="40" className="popup__input popup__input_type_name" required/>
            <span className="popup__error name-error"></span>
            <input type='text' name="userprofile" id="profile" placeholder="Фотограф" minLength="2" maxLength="200" className="popup__input popup__input_type_profile" required/>
            <span className="popup__error profile-error"></span>
            <button type='submit' className="popup__button">
                Сохранить
            </button>
        </fieldset>
        }
        </PopupWithForm>

    </div>
  );
}

export default App;
