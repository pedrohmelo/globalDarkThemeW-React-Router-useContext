import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return  (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={toggleTheme}>Alterar Tema</button>
      <p>O tema atual é: {theme} </p>
    </div>
  )
}

export default Home