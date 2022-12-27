import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Products.css'
const Products = () => {
    const url = 'http://localhost:3000/products'
    console.log(useFetch(url))
    const {data: items, loading, error} = useFetch(url)
  return (
    <div>     
        <h1>Products</h1>
        {error && <p>{error}</p>}
        <ul id="products-ul">
            {items && items.map(item =>(

                <li key={item.id}>
                    <div className='info-product'>
                    <h2>{item.name}</h2>
                    <p>R$ {item.price}</p>
                    </div>
                    <div className='details-product'>
                    <Link to={`/product/${item.id}`}>Details</Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products