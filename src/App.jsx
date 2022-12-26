// Components
import { Button } from './components/Button'
import { Card } from './components/Card'
// Styles
import '../src/sass/App.scss'
// Icons
import { TiArrowBack, TiArrowForward } from 'react-icons/ti'
// Hooks
import { useState } from 'react'

function App() {
  const [pokemonId, setPokemonId] = useState(1)

  function prevClick() {
    pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1)
  }

  function nextClick() {
    setPokemonId(pokemonId + 1)
  }

  return (
    <>
      <div className='card-container'>
        <Card />
      </div>
      <div className='buttons-container'>
        <Button icon={<TiArrowBack />} handleClick={prevClick} />
        {pokemonId}
        <Button icon={<TiArrowForward />} handleClick={nextClick} />
      </div>
    </>
  )
}

export default App
