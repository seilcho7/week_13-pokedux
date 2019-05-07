import React from 'react';

function PokeList({visibilityFilter, cards, handleClick}) {
    
    const cardItems = cards.map((card) => {
        return <li key={card.id} onClick={() => {
            handleClick(card.id);
        }}>{card.name}</li>
    })

    const caughtItems = cards.filter((caught) => {
        // console.log(caught.isCaught);
        return caught.isCaught === true
        // return caughtItem
        // return <li key={caught.id} onClick={() => {
        //     handleClick(caught.id);
        // }}>{caught.name}</li>
        
        // // card.isCaught.map(caught => {
        // //     return <li key={caught.id} onClick={() => {
        // //         handleClick(caught.id);
        // //     }}>{caught.name}</li>

        // // })
    })

    const caught = caughtItems.map((caught) => {
        return <li key={caught.id} onClick={() => {
                handleClick(caught.id);
            }}>{caught.name}</li>
    })


    
    
    return (
        <ul>
            {visibilityFilter === "all" ? cardItems : caught}
        </ul>
    )
}

export default PokeList;