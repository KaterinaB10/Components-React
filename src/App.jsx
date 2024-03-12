import { Warning } from "./components/warnings/Warning";
import { Success } from "./components/warnings/Success";
import { Info } from "./components/warnings/Info";
import { Button } from "./components/warnings/Delete";
import { PopUpMessage } from "./components/pop-up-button/PopUpMessage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= ((<div className="app">
          <header className="header">
            <h1>Components</h1>
          </header>

          <main className="main">
            <section className="warning-messages">
              <Warning />
              <Success
                title="Success"
                subtitle="Here can be a success message"
              />
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
        </div>))></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
