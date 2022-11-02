import "./App.css";
import Animals from "../src/component/Animals";
import Animals1 from "../src/component/Animals1";

function App() {
  // const ani = [
  //   {
  //     name: "Tiger",
  //     type: "omnivores",
  //     color: "yellow",
  //   },
  //   {
  //     name: "Cow",
  //     type: "Herbivores",
  //     color: "White",
  //   },
  //   {
  //     name: "Zebra",
  //     type: "Herbivores",
  //     color: "White and Black",
  //   },
  // ];
  return (
    <div className="App">
      <header className="App-header">
        <Animals />
        <Animals1 name={"title"} />
      </header>
    </div>
  );
}

export default App;
