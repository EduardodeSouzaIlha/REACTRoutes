import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/products?' + searchParams
    const {data:items, loading, error} = useFetch(url)
  return (
    <>
    <h1>Search</h1>
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
    </>
  )
}

export default Search