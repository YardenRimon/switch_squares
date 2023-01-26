import React, {FunctionComponent} from "react";

const Square = (props:{color:'red'|"blue", position: number}) => {

    const uniqueClass = props.color+"_square";
    const translateX = `translateX(${props.position}%)`    

    return (
        <div
        className={`square ${uniqueClass}`}
        style={{
            backgroundColor: props.color,
            border: '1px black solid',
            transform: translateX
        }}>
        </div>
    )
}

export default Square;
