import React from 'react';
import {api} from '../utils/Api';




function Main({onEditProfile, onAddPlace, onEditAvatar}) {


    const [userData, setUserData] = React.useState({});
    const [cards, setCards] = React.useState([]);
    //const [initialCard, setInitialCard] = React.useState([]);
    //const [userDescription, setUserDescription] = React.useState({});
    //const [userAvatar, setUserAvatar] = React.useState({});

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

//   console.log('userData ', userData.avatar);
   console.log('cards ', cards);
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
                        <article className="card">
                        <button type="button" className="card__open-image">
                            <img className="card__image" alt={card.name} src={card.link}/>
                        </button>
                        <button type="button" className="card__delete"></button>
                        <div className="card__subcard">
                            <h2 className="card__text">{card.name}
                            </h2>
                            <div className="card__heart-container">
                                <button type="button" className="card__heart-button"></button>
                                <span className="card__heart-counter">{card.likes.length}</span>
                            </div>
                        </div>
                    </article>        
                    );
                })}  
                
            </section>


        </main>
    );
}

export default Main;
