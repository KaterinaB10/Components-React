import "./tooltip.css";
import "./btnWithTooltip.css";

import { useState } from "react";

export function Tooltip({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <ButtonWithTooltip />
      {isVisible && <div className="tooltip-text">{text}</div>}
    </div>
  );
}

export function ButtonWithTooltip() {
  return (
    <div>
      <button className="btn-tooltip">Profil</button>
    </div>
  );
}
