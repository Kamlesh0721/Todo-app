import Name from "./Components/Name";
import Add from "./Components/Add";
import Item from "./Components/Item";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Name />
      <Add />
      <Item />
    </center>
  );
}

export default App;
