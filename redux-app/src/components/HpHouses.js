import React from 'react';
import HpHouse from './HpHouse';
import { Card } from 'semantic-ui-react';
const HpHouses = (props) => {
    console.log(props)
    return (
        <Card.Group centered>
        {props.houses.map(house => {
           return <HpHouse house={house} key={house._id} addPoints={props.addPoints} subtractPoints={props.subtractPoints}/>
        })}
        </Card.Group>
     
    )
}

export default HpHouses;