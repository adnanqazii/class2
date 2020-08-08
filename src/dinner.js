import React from 'react'
// props is object datatype
function Dinner(props)
{
    // it is jsx since we use HTML in javascript with the help of React function imported above from react library
    // can only return one component like div below
    return (
        <div>
            <h1>serving {props.dishName}</h1>
            <h1>serving sweet {props.sweetDish}</h1>
        </div>
    );
}

export default Dinner;