import React from 'react';
type CardProps = {
    children: any;
    title?: string;
}
const Card = (props: CardProps) => {
    return (
        <div className="card">

            {props.children}
        </div>
    )
}
export default Card;