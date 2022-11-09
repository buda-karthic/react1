import "./App.css";
import Animals from "../src/component/Animals";
import Animals1 from "../src/component/Animals1";
import Animals2 from "../src/component/Animals2";
import { Animals4 } from "../src/component/Animals4";

function App() {
  const ani = [
    {
      name: "Tiger",
      type: "Carnivores",
      color: "yellow",
    },
    {
      name: "Cow",
      type: "Herbivores",
      color: "White",
    },
    {
      name: "Zebra",
      type: "Herbivores",
      color: "White and Black",
    },
    {
      name: "Lion",
      type: "Carnivores",
      color: "Pale",
    },
    {
      name: "Dog",
      type: "Omnivores",
      color: "Multi-color",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Animals />
        *********
        <Animals1 name={"Hey this is Elephant"} />
        *******
        <Animals2
          name={ani[0].color}
          name2={ani[1].color}
          name3={ani[2].name}
          name1={ani[3].name}
        />
        <Animals4 name1={ani[3].color} />
      </header>
    </div>
  );
}

export default App;
