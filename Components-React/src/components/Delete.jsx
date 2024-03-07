import "./delete.css";
import "./popUpMessage.css";
import { PopUpMessage } from "./PopUpMessage";
import { useState } from "react";

export function Button(props) {
  const [deleteButton, setDeleteButton] = useState(false);

  return (
    <section className="btn-section">
      <div className="btn-container">
        <button onClick={() => setDeleteButton(true)} className="btn">
          {props.btnName}
        </button>

        <PopUpMessage trigger={deleteButton}>
          <div className="pop-up-message-text">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
          </div>
          <div className="pop-up-message-buttons">
            <button
              onClick={() => setDeleteButton(false)}
              className="btn no-accent"
            >
              {props.nameBtnLeft}
            </button>
            <button onClick={() => setDeleteButton(false)} className="btn">
              {props.nameBtnRight}
            </button>
          </div>
        </PopUpMessage>
      </div>
    </section>
  );
}
