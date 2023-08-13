function ImagePopup() {
    return (
        <div className="popup popup_type_img">
            <div className="popup__container-img">
              <button type="button" className="popup__close"></button>
              <figure className="popup__figure">
                <img className="popup__img"/>
                <figcaption className="popup__figcaption">
                </figcaption>
              </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
