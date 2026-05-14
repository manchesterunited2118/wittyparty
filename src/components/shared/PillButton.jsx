import { useState } from "react";
import { token, gradPink } from "../../constants/tokens";

export default function PillButton({
  children,
  onClick,
  gradient = gradPink,
  disabled = false,
  style = {},
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        padding: "14px 0",
        border: "none",
        borderRadius: 50,
        background: disabled ? "#ccc" : gradient,
        color: token.white,
        fontWeight: 700,
        fontSize: 15,
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : `0 4px 20px rgba(233,30,140,0.35)`,
        transform: hover && !disabled ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.15s, box-shadow 0.15s",
        ...style,
      }}
    >
      {children}
    </button>
  );
}