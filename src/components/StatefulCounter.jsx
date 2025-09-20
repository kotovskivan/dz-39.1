import { useState } from "react";

function StatefulCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Stateful (становий) компонент</h2>
      <p>Лічильник: {count}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
    </div>
  );
}

export default StatefulCounter;
