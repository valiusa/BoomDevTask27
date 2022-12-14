import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count]);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          {/* Edit the <code>./src</code> folder to add components. */}
          <button onClick={() => setCount(count + 1)}>Count ({count})</button>;
        </div>
      </div>
    </div>
  );
}

export default App;
