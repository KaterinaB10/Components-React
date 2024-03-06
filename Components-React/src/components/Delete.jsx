import "./delete.css";
import "./popUpMessage.css";
import { PopUpMessage } from "./PopUpMessage";
// import { showPopUp } from "./showPopUp.js";

export function Button(props) {
  // const openClick = () => {
  //   console.log("clicked");
  // };

  return (
    <section className="btn-section">
      <div className="btn-container">
        <button className="btn">{props.btnName}</button>
        <PopUpMessage trigger={true}>
          <div className="pop-up-message-text">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
          </div>
          <div className="pop-up-message-buttons">
            <button className="btn no-accent">{props.nameBtnLeft}</button>
            <button className="btn">{props.nameBtnRight}</button>
          </div>
        </PopUpMessage>
      </div>
    </section>
  );
}
