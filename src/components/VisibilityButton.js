import React from 'react';

function VisibilityButton({handleAll, handleCaught, handleUncaught}) {

    return (
        <div>
            <button onClick={handleAll}>All</button>
            <button onClick={handleCaught}>CAUGHT</button>
            <button onClick={handleUncaught}>UNCAUGHT</button>
        </div>
    );
}

export default VisibilityButton;