import "./delete.css";

export function Button(props) {
  return (
    <section className="btn-section">
      <div className="btn-container">
        <button className="btn">{props.btnName}</button>
      </div>
    </section>
  );
}
