import React from 'react'

const DisplayProducts = (product) => {
  return (
<Link to={`/products/${product.id}`}>
        <img src={product.image_url} id="macbooks" />
        <figcaption>{product.name}</figcaption>
      </Link>
  )
}

export default DisplayProducts