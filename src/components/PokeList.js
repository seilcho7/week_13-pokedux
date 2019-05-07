import React from 'react';

function PokeList({cards}) {
    
    const cardItems = card.map((card) => {
        return <li>{card.name}</li>
    })
    
    return (
        <ul>
            {cardItems}
        </ul>
    )
}

export default PokeList;