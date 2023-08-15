
function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }  

    return (
        <article className="card">
        <button type="button" className="card__open-image" onClick={handleClick}>
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
}

export default Card;
