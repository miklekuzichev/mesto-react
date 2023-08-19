import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    
    return (

        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={props.name}
            title='Редактировать профиль'
            buttonText='Сохранить'
            >
            <input type='text' name="username" id="name" placeholder="Иван Иванов" minLength="2" maxLength="40" className="popup__input popup__input_type_name" required/>
            <span className="popup__error name-error"></span>
            <input type='text' name="userprofile" id="profile" placeholder="Фотограф" minLength="2" maxLength="200" className="popup__input popup__input_type_profile" required/>
            <span className="popup__error profile-error"></span>
        </PopupWithForm>

    )
};

export default EditProfilePopup;