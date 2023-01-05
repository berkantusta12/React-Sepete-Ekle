import React from 'react'
import "./CardImage.css"

function CardImage({image}) {
  return (
    <div className='card-image'>
      <img src={image} alt=""></img>
    </div>
  )
}

export default CardImage
