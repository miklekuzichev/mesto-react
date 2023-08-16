import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    
    return (

        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={props.name}
            title={props.title}
            buttonText='Создать'
            >
            <input type='text' name="imagename" id="imageName" placeholder="Название" minLength="2" maxLength="30" className="popup__input popup__input_type_imagename" required/>
            <span className="popup__error imageName-error"></span>
            <input type='url' name="imagelink" id="imageLink" placeholder="Ссылка на картинку" className="popup__input popup__input_type_imageurl" required/>
            <span className="popup__error imageLink-error"></span>
        </PopupWithForm>

    )
};

export default AddPlacePopup;