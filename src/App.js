import React from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";

function App() {
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        <Greeting appName={"Our First App"} username={"Eldin Hasanovic"} />
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
          />
          <PersonCard
            ImgURL={"https://avatars.githubusercontent.com/u/86130682?v=4"}
            FullName={"Eldin Hasanovic"}
            Location={"Novi Pazar"}
            gotoGit={"https://github.com/eldinhasanovic?tab=repositories"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
