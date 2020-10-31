import React from 'react'
import Card from './Card'
import MOdal from './Modal'

function CardContainer(props)
{
    return(
    <div className="cardContainer">
        <hr />
        <h3>{props.name}</h3>
        <div className="card-deck padcard">
            <Card />
            <Card />
            <Card />
        </div>
        <div className="more">
            <a href="#">Read more...</a>
        </div>
    </div>

   

    )
}
export default CardContainer
