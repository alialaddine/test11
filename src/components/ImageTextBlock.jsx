import React from 'react'

const ImageTextBlock = ({image, title, description, direction}) => {
  return (
    <div className={`block-${direction} page-block img-txt`}>
      <div>
          <img src={image} alt="" />
      </div>
      <div>
          <h1>{title}</h1>
          <p>{description}</p>
      </div>
    </div>
  )
}

export default ImageTextBlock