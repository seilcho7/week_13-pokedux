import React from 'react';

function PokeList({visibilityFilter, cards, handleClick}) {
    
    const cardItems = cards.map((card) => {
        return <li key={card.id} onClick={() => {
            handleClick(card.id);
        }}>{card.name}</li>
    })

    const caughtItems = cards.filter((card) => {
        return card.isCaught === true
    })

    const caught = caughtItems.map((card) => {
        return <li key={card.id} onClick={() => {
                handleClick(card.id);
        }}>{card.name}</li>
    })

    const uncaughtItems = cards.filter((card) => {
        return !card.isCaught
    })

    const uncaught = uncaughtItems.map((card) => {
        return <li key={card.id} onClick={() => {
            handleClick(card.id);
        }}>{card.name}</li>
    })


    
    
    return (
        <ul>
            {visibilityFilter === "all" ? cardItems : visibilityFilter ==="caught" ? caught : visibilityFilter === "uncaught" ? uncaught : null}
        </ul>
    )
}

export default PokeList;