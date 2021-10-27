
import "../Components/Card.css";


function Card({user_id,user_name,user_email,joined_date}){

return (

    <div className='Card'>
      <div className = 'upper-container'>
        <div className = 'image-container'>
       </div>
      </div>
      <div className="lower-container">

        <h1 id='id'>User id   :{user_id}</h1>
        <h2 id="name">User name   :{user_name}</h2>
        <h3 id='email'>User email   :{user_email}</h3>
        <h4 id ='joined_date'>Joined   :{joined_date}</h4>

      </div>

    </div>  
  )
}

export default Card;