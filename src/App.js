import React from "react";
import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import HotelCard from "./components/Cards/HotelCard/HotelCard";
import hoteli from "./common/hotels.json";
import persons from "./common/people.json";

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const [name, setName] = useState("");
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
                zvezdice={hotel.zvezdice}
                udaljenost={hotel.udaljenost}
                rating={hotel.rating}
                brocena={hotel.brocena}
              />
            ))}
          </div>
        </div>
        <form onSubmit={() => {}}>
          <label htmlFor="Ime">Unesite vase ime</label>
          <input
            id="Ime"
            type="text"
            value="ime"
            // onChange={() => {
            //   setName(event.target.value);
            // }}
          />
          <br />
          <label htmlFor="Prezime">Unesite vase Prezime</label>
          <input
            id="Prezime"
            type="text"
            value="ime"
            // onChange={() => {
            //   setName(event.target.value);
            // }}
          />
          <br />
          <label htmlFor="Email">Unesite vas email</label>
          <input
            id="Email"
            type="email"
            value="ime"
            // onChange={() => {
            //   setName(event.target.value);
            // }}
          />
          <br />
          <label htmlFor="BrojTel">Unesite vas broj telefona</label>
          <input
            id="BrojTel"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value="ime"
          />
          <br />
          <button type="submit"></button>
        </form>
      </div>
    </>
  );
}

export default App;
