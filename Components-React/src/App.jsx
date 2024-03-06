import { Warning } from "./components/Warning";
import { Success } from "./components/Success";
import { Info } from "./components/Info";
import { Button } from "./components/Delete";
import { PopUpMessage } from "./components/PopUpMessage";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Components</h1>
      </header>

      <main className="main">
        <section className="warning-messages">
          <Warning />
          <Success title="Success" subtitle="Here can be a success message" />
          <Info title="Info" subtitle="Here can be an info message" />
        </section>
        <section className="button">
          <Button
            btnName="Delete"
            title="Delete message"
            subtitle="Are you sure you want to delete this message?"
            nameBtnLeft="Yes, delete"
            nameBtnRight="No, leave message"
          />
        </section>
      </main>

      <footer className="footer">
        <p>Made by Katerina</p>
        <p>Using React</p>
      </footer>
    </div>
  );
}

export default App;
