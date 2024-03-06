import { Warning } from "./components/Warning";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Components</h1>
      </header>

      <main className="main">
        <Warning />
      </main>

      <footer className="footer">
        <p>Made by Katerina</p>
        <p>Using React</p>
      </footer>
    </div>
  );
}

export default App;
