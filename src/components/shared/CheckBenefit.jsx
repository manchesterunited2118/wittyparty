import { token } from "../../constants/tokens";

export default function CheckBenefit({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
        fontSize: 12,
        color: token.text,
      }}
    >
      <span style={{ color: token.green, fontWeight: 700, fontSize: 14 }}>✓</span>
      <span>{children}</span>
    </div>
  );
}