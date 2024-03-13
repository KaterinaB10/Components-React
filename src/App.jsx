import { Warning } from "./components/warnings/Warning";
import { Success } from "./components/warnings/Success";
import { Info } from "./components/warnings/Info";
import { Button } from "./components/pop-up-button/Delete";
import Style from "./index.css";

function App() {
  return (
    <>
      <header className={Style.header}>
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
        <br />
        <section></section>
      </main>

      <footer className="footer">
        <p>Made by Katerina</p>
        <p>Using React</p>
      </footer>
    </>
  );
}

export default App;
