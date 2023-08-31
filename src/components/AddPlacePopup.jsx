import PopupWithForm from './PopupWithForm';
import React from "react";


function AddPlacePopup(props) {
    
  const [imagename, setImagename] = React.useState('');
  const [imagelink, setImagelink] = React.useState('');

  function handlleNameChange(evt) {
    setImagename(evt.target.value);
  }

  function handleLinkChange(evt) {
    setImagelink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    
    props.onAddPlace({
      imagename,
      imagelink
    });
  }

  React.useEffect(() => {
    setImagename('');
    setImagelink('');
  }, [props.isOpen])


    return (

        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={props.name}
            title='Новое место'
            buttonText='Создать'
            onSubmit={handleSubmit}
            renderButtonText='Загрузка...'
            >
            <input type='text' name="imagename" onChange={handlleNameChange} value={imagename} id="imageName" placeholder="Название" minLength="2" maxLength="30" className="popup__input popup__input_type_imagename" required/>
            <span className="popup__error imageName-error"></span>
            <input type='url' name="imagelink" onChange={handleLinkChange} value={imagelink} id="imageLink" placeholder="Ссылка на картинку" className="popup__input popup__input_type_imageurl" required/>
            <span className="popup__error imageLink-error"></span>
        </PopupWithForm>

    )
};

export default AddPlacePopup;