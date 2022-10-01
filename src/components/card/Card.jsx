import './card.css'

function Card({ monster }) {
  const { id, name, email } = monster;
  
  return (
    <div className='card-container'>
      <img 
        src={`https://robohash.org/${id}?set=set2&size=180x180`} 
        alt={name}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

export default Card