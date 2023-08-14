import {useEffect} from "react";
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {


    const [isOpen, setIsOpen] = React.useState(false);
    const [name, SetName] = React.useState('');
    const [title, SetTitle] = React.useState('');

    const handleEditAvatarClick = () => {
        setIsOpen(!isOpen);
        SetName('edit-profile');
        SetTitle('Обновить аватар');
    };

    const handleEditProfileClick = () => {
        setIsOpen(!isOpen);
        SetName('type_edit');
        SetTitle('Редактировать профиль');
    };

    const handleAddPlaceClick = () => {
        setIsOpen(!isOpen);
        SetName('type_add');
        SetTitle('Новое место');
    };

    

    const closeAllPopups = () => {
        setIsOpen(false);
    };
        

  return (
    <div className="page">
        <Header />
        <Main 
         onEditProfile={handleEditProfileClick}
         onAddPlace={handleAddPlaceClick}
         onEditAvatar={handleEditAvatarClick}
         
        />
        <Footer />
        <ImagePopup />
        <PopupWithForm 
         isOpen={isOpen}
         onClose={closeAllPopups}
         name={name}
         title={title}
         >
         {name === 'edit-profile' ? 
         <fieldset class="popup__fieldset">
            <input type='url' name="imagelink" id="imageLinkProfile" placeholder="Ссылка на картинку" class="popup__input popup__input_type_imageurl" required/>
            <span class="popup__error imageLinkProfile-error"></span>
            <button type='submit' class="popup__button">
                Сохранить
            </button>
            </fieldset> : name === 'type_add' ?
        <fieldset class="popup__fieldset">
            <input type='text' name="imagename" id="imageName" placeholder="Название" minlength="2" maxlength="30" class="popup__input popup__input_type_imagename" required/>
            <span class="popup__error imageName-error"></span>
            <input type='url' name="imagelink" id="imageLink" placeholder="Ссылка на картинку" class="popup__input popup__input_type_imageurl" required/>
            <span class="popup__error imageLink-error"></span>
            <button type='submit' class="popup__button">
                Создать
            </button>
        </fieldset> : 
        <fieldset class="popup__fieldset">
            <input type='text' name="username" id="name" placeholder="Иван Иванов" minlength="2" maxlength="40" class="popup__input popup__input_type_name" required/>
            <span class="popup__error name-error"></span>
            <input type='text' name="userprofile" id="profile" placeholder="Фотограф" minlength="2" maxlength="200" class="popup__input popup__input_type_profile" required/>
            <span class="popup__error profile-error"></span>
            <button type='submit' class="popup__button">
                Сохранить
            </button>
        </fieldset>
        }
        </PopupWithForm>

    </div>
  );
}

export default App;
