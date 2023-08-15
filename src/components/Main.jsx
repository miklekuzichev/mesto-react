import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userData, setUserData] = React.useState({});
    const [cards, setCards] = React.useState([]);

   React.useEffect(() => {
    //
    // Загрузка готовых карточек и данных о пользователе с сервера
    //
        Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cards, userData]) => {
            setUserData(userData);
            setCards(cards);
        })
        .catch(console.error);

   }, []);

   const { name, about, avatar } = userData;

    return (
        <main>
            <section className="profile">
                <div className="profile__card-user">
                    <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
                        <img  alt="Аватар пользователя" className="profile__avatar" src={avatar}/>
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__title">{name}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        </button>
                        <p className="profile__subtitle">{about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}>
                </button>
            </section>
            <section className="cards" aria-label="Галерея картинок">
                {cards.map((card) => {
                    return (
                        <Card 
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default Main;
