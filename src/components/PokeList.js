import React from 'react';

function PokeList({visibilityFilter, cards, handleClick}) {
    
    const cardItems = cards.map((card) => {
        return <li key={card.id} onClick={() => {
            handleClick(card.id);
        }}><img src={card.imageUrlHiRes}
        /><br/>{card.name}</li>
    })

    const caughtItems = cards.filter((card) => {
        return card.isCaught === true
    }).map((card) => {
        return <li key={card.id} onClick={() => {
                handleClick(card.id);
        }}><img src={card.imageUrlHiRes}
        /><br/>{card.name}</li>
    });

    const uncaughtItems = cards.filter((card) => {
        return !card.isCaught
    }).map((card) => {
        return <li key={card.id} onClick={() => {
            handleClick(card.id);
        }}><img src={card.imageUrlHiRes}
        /><br/>{card.name}</li>
    });

    return (
        <ul className="list">
            {visibilityFilter === "all" ? cardItems : visibilityFilter ==="caught" ? caughtItems : visibilityFilter === "uncaught" ? uncaughtItems : null}
        </ul>
    )
}

export default PokeList;