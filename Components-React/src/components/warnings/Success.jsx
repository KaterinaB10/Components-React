import "./success.css";

export function Success(props) {
  return (
    <section className="success-message">
      <div className="message-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="green"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          width={35}
          height={35}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="message">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </section>
  );
}
