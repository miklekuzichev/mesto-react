
function Main({onEditProfile, onAddPlace, onEditAvatar}) {


    return (
        <main>
            <section className="profile">
                <div className="profile__card-user">
                    <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
                        <img src="#" alt="Аватар пользователя" className="profile__avatar"/>
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__title"></h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        </button>
                        <p className="profile__subtitle"></p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}>
                </button>
            </section>
            <section className="cards" aria-label="Галерея картинок">  
            </section>
        </main>
    );
}

export default Main;
