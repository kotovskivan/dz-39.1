import "./App.css";
import StatefulCounter from "./components/StatefulCounter";
import StatelessMessage from "./components/StatelessMessage";
import ClassCounter from "./components/ClassCounter";

function App() {
  return (
    <>
      <h1>React ДЗ 39.1</h1>
      <StatefulCounter />
      <StatelessMessage text="Привіт! Я безстановий компонент 🚀" />
      <ClassCounter />
    </>
  );
}

export default App;
