import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
const Info = () => {
  const {id} = useParams()
  const url = 'http://localhost:3000/products/' + id 
  const {data: product, loading, error} = useFetch(url )
  return (
    <div>
        
        {error && <p>Error</p>}
        {loading && <p>loading...</p>}
        {product && (
        <div>
        <h1>More information about the product {product.name}</h1>     
        <img src={product.img} alt="img" />
        </div>
        )}
    </div>
  )
}

export default Info