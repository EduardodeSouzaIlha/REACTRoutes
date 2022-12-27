import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
const About = () => {
  const { counter} = useContext(CounterContext)
    
  return (
    <div>
        <h1>Valor do contador { counter}</h1>
    </div>
  )
}

export default About