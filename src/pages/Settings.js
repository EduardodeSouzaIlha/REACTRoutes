import React from 'react'
import { useTitleColorContext } from '../hooks/useTitleColorContext'
import './Settings.css'
const Settings = () => {
    const { dispatch} = useTitleColorContext()
    const setTitleColor = (color) => {
        dispatch({type: color})
      }
  return (
    <div >
        <div id="settings">
          <button onClick={()=>setTitleColor("DARK")}>DARK</button>
          <button onClick={()=>setTitleColor("WHITE")}>WHITE</button>
        </div>

    </div>
  )
}

export default Settings