import { Warning } from "./components/Warning";
import { Success } from "./components/Success";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Components</h1>
      </header>

      <main className="main">
        <Warning />
        <Success title="Success" subtitle="Here can be a success message" />
      </main>

      <footer className="footer">
        <p>Made by Katerina</p>
        <p>Using React</p>
      </footer>
    </div>
  );
}

export default App;
