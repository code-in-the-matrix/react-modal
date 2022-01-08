import "./App.css";
import Todo from "./Component/Todo.js";

function App() {
  return (
    <div className="App">
      <div className="header">My todos</div>
      <div className="todos">
        <Todo text="Learn React" />
        <Todo text="Practice React" />
        <Todo text="Master React" />
      </div>
    </div>
  );
}

export default App;
