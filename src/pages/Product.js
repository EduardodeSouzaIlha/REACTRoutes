import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
const Product = () => {
    const {id } = useParams()
    const url = 'http://localhost:3000/products/' + id 
    const {data: product, loading, error} = useFetch(url )
  return (
    <div>
        {error && <p>Error</p>}
        {loading && <p>loading...</p>}
        {product && (
        <div>
        <h1>{product.name}</h1>
        <p>R$ {product.price}</p>
        <img src={product.img} alt="img" />
        <Link to={`/products/${product.id}/info`}> More information </Link>
        </div>
        )}
    </div>
  )
}

export default Product