import React from 'react'
import "./CardInfo.css"
function CardInfo({info}) {
  return (
    <div style={{textAlign: "center",fontSize:"20px"}}>
      {info}
    </div>
  )
}

export default CardInfo
