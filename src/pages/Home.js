// import React, { useContext } from 'react'
import './Home.css'
// import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'
const Home = () => {
  
  // const { counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
 
 
      return (
    <div id="home">
        <h1>Valor do contador { counter}</h1>
        <ChangeCounter/>
       
    </div>
  )
}

export default Home