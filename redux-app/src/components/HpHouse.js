import React from 'react';
import { Card, Image } from 'semantic-ui-react';
const HpHouse = (props) => {
    console.log(props)
    let imgSrc;
    if(props.house.name === 'Gryffindor') {
        imgSrc = 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529'
    } else if(props.house.name === 'Slytherin') {
        imgSrc = 'https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848'
    } else if(props.house.name === 'Ravenclaw') {
        imgSrc = 'https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945'
    } else {
        imgSrc = 'https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653';
    }
    return (
        <Card color='black' style={{opacity: '.75'}}>
            <Image src={imgSrc} wrapped ui={false} />
            <Card.Content>
                <Card.Header> {props.house.name}</Card.Header>
                <Card.Meta><h2>Head of House:</h2> <h3>{props.house.headOfHouse}</h3></Card.Meta>
            </Card.Content>
            <Card.Content extra>
               <button onClick={() => props.subtractPoints(props.house)}>Subtract 10 Points</button> <p style={{fontSize: '3rem'}}> Points: {props.house.points} </p> <button onClick={() => props.addPoints(props.house)}>Add 10 Points</button>
            </Card.Content>
       
        </Card>
    )
}


export default HpHouse;