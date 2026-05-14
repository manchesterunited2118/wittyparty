import { token } from "../../constants/tokens";

export default function Tag({ children }) {
  return (
    <span
      style={{
        background: "rgba(255,255,255,0.18)",
        color: token.white,
        borderRadius: 20,
        padding: "3px 10px",
        fontSize: 11,
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {children}
    </span>
  );
}