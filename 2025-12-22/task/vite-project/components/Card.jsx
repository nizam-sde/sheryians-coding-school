const Card = (props) => {

console.log(props);


  return (
     <div className="card">
        <div className="top">
          <img src={props.image} alt="failed img" />
        </div>
        <div className="bottom">
            <h1>{props.nameOfPlace}</h1>
            <p>{props.description}</p>
            <div className="stay">Stay - &nbsp;
              {props.daysOfStay} days
            </div>
            <button>{props.reservationStatus}</button>
        </div>
     </div>
  )
}

export default Card
