import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import { Form } from "./components/Form/Form";

// const poruke = [
//   "Danas je subota",
//   "Sutra ce biti nedelja",
//   "Danas pada kisa",
//   "Nedelja je neradan dan",
// ];

export const BASE_URL = "https://api.quotable.io";

function App() {
  // // const [count, setCount] = React.useState(0);
  // const [count, setCount] = useState(0);
  // // setCount je metoda pomocu koje menjamo vrednost count state_a:
  // const increaseCount = () => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };

  // const [arr, setArr] = useState(poruke);
  // const reverseArr = () => {
  //   const _arr = [...arr];
  //   const reversed = _arr.reverse();
  //   setArr(reversed);
  // };

  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      {/* <div className="App"> */}
      {/* <Greeting appName={"Our First App"} username={"Eldin Hasanovic"} />
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
        {persons.map((person) => (
          <PersonCard
          key={person.id}
          imgURL={person.imgURL}
          fullName={person.fullName}
          location={person.location}
          description={person.description}
          goToGit={person.goToRepositories}
            />
          ))}{" "}
        </div> */}
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
      {/* <div className="hotel">
          <h1>Where to stay in United States of America</h1>
          <h2>Top hotels in Las Vegas</h2>
          <div className="karticecontainer">
          {hoteli.map((hotel) => (
            <HotelCard
            key={hotel.id}
            imgHotel={hotel.imgHotel}
            imeHotela={hotel.imeHotela}
            zvezdice={hotel.zvezdice}
            udaljenost={hotel.udaljenost}
            rating={hotel.rating}
                brocena={hotel.brocena}
              />
              ))}
              </div>
            </div> */}
      {/* <Form /> */}
      {/* <button onClick={reverseArr()}></button>
        <div>
        {arr.map((poruke) => (
          <p>{poruke}</p>
          ))}
        </div> */}
      {/* <TeamCard /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
