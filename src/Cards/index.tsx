import React from 'react';
import BinarySearch from './BinarySearch';
import Card from '../components/Card'
import './styles/cards.scss';
import OrderBySelection from './OrderBySelect';

export default function Cards() {
    const arrayCards = [<BinarySearch />, <OrderBySelection />]
    return (
        <div className="cards-container">
            {arrayCards.map((component, i) =><div className= {`card-content-${i} card-background-${i}`}> <Card key={i}>{component}</Card></div>)}
        </div>

    )
};
