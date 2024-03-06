import "./popUpMessage.css";

export function PopUpMessage(props) {
  return props.trigger ? (
    <div className="pop-up-message-container hide">{props.children}</div>
  ) : (
    ""
  );
}
