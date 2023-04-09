import React from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import HotelCard from "./components/Cards/HotelCard/HotelCard";
// const persons = [
//   {
//     imgURL: "https://avatars.githubusercontent.com/u/89378479?v=4",
//     fullName: "Dzenan Kosuta",
//     description: "Dzenan is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToGit: "https://github.com/dzenankosuta?tab=repositories",
//   },
//   {
//     imgURL: "https://avatars.githubusercontent.com/u/111905831?v=4",
//     fullName: "Alen Muslic",
//     description: "Alen is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToGit: "https://github.com/alenmuslic?tab=repositories",
//   },
//   {
//     imgURL:
//       "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg",
//     fullName: "Aladin Zecic",
//     description: "Aladin is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToGit: "https://github.com/aladinzecic?tab=repositories",
//   },
//   {
//     imgURL: "https://avatars.githubusercontent.com/u/111905979?v=4",
//     fullName: "Haris Muslic",
//     description: "Haris is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToGit: "https://github.com/harismuslic04?tab=repositories",
//   },
// ];
const hoteli = [
  {
    imgHotel:
      "https://images.trvl-media.com/lodging/1000000/50000/41100/41081/18cfc8a0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    imeHotela: "The STRAT Hotel, Casino & SkyPo",
    zvezdice: 4,
    udaljenost: 1.75,
    rating: "6.2/10",
    brocena: 11818,
  },
  {
    imgHotel:
      "https://images.trvl-media.com/lodging/1000000/20000/16000/15930/64fa82f5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    imeHotela: "Treasure Island – TI Las Vegas Hotel Casino, a Radisson Hotel",
    zvezdice: 4,
    udaljenost: 3.57,
    rating: "8/10",
    brocena: 17685,
  },
  {
    imgHotel:
      "https://images.trvl-media.com/lodging/1000000/10000/1500/1443/c10675a3.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    imeHotela: "The Venetian Resort Las Vegas",
    zvezdice: 5,
    udaljenost: 3.69,
    rating: "8.8/10",
    brocena: 16446,
  },
];
function App() {
  const [count, setCount] = React.useState(0);
  // const [count, setCount] = useState(0);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        {/* <Greeting appName={"Our First App"} username={"Eldin Hasanovic"} /> */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 250px)",
            gridGap: "30px",
            gridAutoRows: "minmax(420px, auto)",
            justifyContent: "center",
            // marginRight: "20px",
          }}
        >
          {/* <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          /> */}
          {/* {persons.map((person) => (
            <PersonCard
              imgURL={person.imgURL}
              fullName={person.fullName}
              location={person.location}
              description={person.description}
              goToGit={person.goToRepositories}
            />
          ))} */}
        </div>
        {/* <button style={{ width: "40px" }} onClick={decreaseCount}>
          -
        </button>
        <p>{count}</p>
        <button
          style={{ width: "40px" }}
          onClick={() => {
            console.log("povecanje");
            setCount(count + 1);
          }}
        >
          +
        </button> */}
        <div className="hotel">
          <h1>Where to stay in United States of America</h1>
          <h2>Top hotels in Las Vegas</h2>
          <div className="karticecontainer">
            {hoteli.map((hotel) => (
              <HotelCard
                imgHotel={hotel.imgHotel}
                imeHotela={hotel.imeHotela}
                location={hotel.location}
                udaljenost={hotel.udaljenost}
                rating={hotel.rating}
                brocena={hotel.brocena}
              />
            ))}
          </div>
          <div className="kartice"></div>
        </div>
      </div>
    </>
  );
}

export default App;
