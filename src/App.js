import "./App.css";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 style={{ color: "ffffff" }} className="">
          ASSAD
        </h1>
      </header>
      <Greeting appName="Our First App" username="Eldin Hasanovic" />
    </div>
  );
}

export default App;
