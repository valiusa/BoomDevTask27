import "./App.css";
import UpdateTitleComponent from "./UpdateTitleButton";

function App() {
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
          <UpdateTitleComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
