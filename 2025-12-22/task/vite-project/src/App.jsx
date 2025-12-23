import Card from "../components/Card"


const App = () => {
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
      reservationStatus: "all booked",
      bookmarked: false,
      image: "https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=1024x1024&w=is&k=20&c=GzMFwHZE6rktQgOnEnVXQLm3-MPxHF1K6lY6g91O3Kc=",
    },
    {
      nameOfPlace: "Goa",
      description: "Popular beach destination known for nightlife, beaches, and Portuguese heritage.",
      daysOfStay: 4,
      reservationStatus: "available",
      bookmarked: true,
      image: "https://t3.ftcdn.net/jpg/03/44/89/24/240_F_344892428_JZsGUJQTH2Dudtng359dtr1dayMHf1io.jpg"

    },
    {
      nameOfPlace: "Munnar, Kerala",
      description: "A scenic hill station known for tea gardens, misty hills, and pleasant climate.",
      daysOfStay: 3,
      reservationStatus: "available",
      bookmarked: false,
      image: "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=1024x1024&w=is&k=20&c=vX0rDbuYIqsekJEP6l7JrkNRFZIUxojMQn27HH-lA2U=",
    },
    {
      nameOfPlace: "Varanasi, Uttar Pradesh",
      description: "One of the oldest cities in the world, famous for ghats, temples, and spiritual heritage.",
      daysOfStay: 2,
      reservationStatus: "all booked",
      bookmarked: true,
      image: "https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?s=612x612&w=0&k=20&c=fFpEL17MiQJx5NkkNIVrTsesd2E8b04SCgzjfhUmQ7g=",
    },
    {
      nameOfPlace: "Leh-Ladakh, Jammu & Kashmir",
      description: "A high-altitude desert known for monasteries, mountains, and adventure tourism.",
      daysOfStay: 5,
      reservationStatus: "available",
      bookmarked: false,
      image: "https://media.istockphoto.com/id/1155675399/photo/pangong-lake.jpg?s=612x612&w=0&k=20&c=nBGDknbZslRWqMtQGZOyqkb_KzcT-Mx4DrSfVLQUYxQ=",

    }
  ];
  return (
    <div>
      <main>
        {indianTouristPlaces.map(function (e) {
          return <Card indianTouristPlaces={indianTouristPlaces}
            nameOfPlace={e.nameOfPlace}
            description={e.description}
            daysOfStay={e.daysOfStay}
            reservationStatus={e.reservationStatus}
            image={e.image}
          />
        })}
      </main>
    </div>
  )
}

export default App
