import { SCREENS } from "../../constants/data";
import { token } from "../../constants/tokens";

export default function TopNav({ screen, nav }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0f0e1a",
        padding: "7px 14px",
        display: "flex",
        gap: 7,
        flexWrap: "wrap",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {SCREENS.map((s) => (
        <button
          key={s}
          onClick={() => nav(s)}
          style={{
            padding: "4px 11px",
            borderRadius: 20,
            border: "none",
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 0.3,
            background: screen === s ? token.pink : "#222240",
            color: screen === s ? "#fff" : "#999",
            transition: "all 0.2s",
          }}
        >
          {s.replace(/_/g, " ")}
        </button>
      ))}
    </div>
  );
}