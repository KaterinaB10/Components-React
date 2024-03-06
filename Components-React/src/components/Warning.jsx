import "./warning.css";

export function Warning() {
  return (
    <section className="warning-message warning">
      <div className="message-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          width={35}
          height={35}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="message">
        <h1>Warning</h1>
        <p>Here can be warning message</p>
      </div>
    </section>
  );
}
