import '../sass/Card.scss'

const Card = () => {
  return (
    <div className='card'>
      <p className='card__name'>Hola</p>
      <div className='card__circle'></div>
      <img className='card__image' src='' alt='pokemon image' />
    </div>
  )
}

export { Card }
