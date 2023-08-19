import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    
    return (

        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={props.name}
            title='Обновить аватар'
            buttonText='Сохранить'
            >
            <input type='url' name="imagelink" id="imageLinkProfile" placeholder="Ссылка на картинку" className="popup__input popup__input_type_imageurl" required/>
            <span className="popup__error imageLinkProfile-error"></span>
        </PopupWithForm>

    )
};

export default EditAvatarPopup;