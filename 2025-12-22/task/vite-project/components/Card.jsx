const Card = () => {
  const indianTouristPlaces = [
  {
    nameOfPlace: "Taj Mahal, Agra",
    description: "A UNESCO World Heritage Site and one of the Seven Wonders of the World, built by Mughal Emperor Shah Jahan.",
    daysOfStay: 2,
    reservationStatus: "available",
    bookmarked: true,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwsoHZEYK0M5j-e3M9rt3OmNtcjuiDME7FEyFMiPF0rXd50AqKMyGIBuj_4zEunA8c-sVOi4oafQqR4OeUV2vsy4QusClM1di3rR94mfTMJJVKKP4AYwvsOrR_Xnsj0ksWZlRHv=s1360-w1360-h1020-rw",
    
  },
  {
    nameOfPlace: "Jaipur, Rajasthan",
    description: "The Pink City, famous for forts, palaces, and rich Rajasthani culture.",
    daysOfStay: 3,
    reservationStatus: "booked",
    bookmarked: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Hawa_Mahal_2011.jpg",
  },
  {
    nameOfPlace: "Goa",
    description: "Popular beach destination known for nightlife, beaches, and Portuguese heritage.",
    daysOfStay: 4,
    reservationStatus: "available",
    bookmarked: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Baga_Beach_Goa.jpg"
    
  },
  {
    nameOfPlace: "Munnar, Kerala",
    description: "A scenic hill station known for tea gardens, misty hills, and pleasant climate.",
    daysOfStay: 3,
    reservationStatus: "available",
    bookmarked: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Munnar_hillstation_kerala.jpg",
  },
  {
    nameOfPlace: "Varanasi, Uttar Pradesh",
    description: "One of the oldest cities in the world, famous for ghats, temples, and spiritual heritage.",
    daysOfStay: 2,
    reservationStatus: "booked",
    bookmarked: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Varanasi_Ghats.jpg",
  },
  {
    nameOfPlace: "Leh-Ladakh, Jammu & Kashmir",
    description: "A high-altitude desert known for monasteries, mountains, and adventure tourism.",
    daysOfStay: 5,
    reservationStatus: "available",
    bookmarked: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pangong_Tso_Ladakh.jpg",
    
  }
];

  return (
    <main>
     <div className="card">
        <div className="top">
          <img src={indianTouristPlaces[0].image} alt="failed img" />
        </div>
        <div className="bottom">
            <h1>{indianTouristPlaces[0].nameOfPlace}</h1>
            <p>{indianTouristPlaces[0].description}</p>
            <div className="stay">Stay - &nbsp;
              {indianTouristPlaces[0].daysOfStay} days
            </div>
            <button>{indianTouristPlaces[0].reservationStatus}</button>
        </div>
     </div>
    </main>
  )
}

export default Card
