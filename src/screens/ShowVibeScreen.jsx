import { useState } from "react";
import PillButton from "../components/shared/PillButton";
import { token } from "../constants/tokens";


export default function ShowVibeScreen({ onContinue }) {
  const [count, setCount] = useState(3);
  const slots = [
    { type: "add" },
    { type: "photo", bg: "linear-gradient(160deg,#f5e0c8,#c89a6a)", id: 1 },
    { type: "photo", bg: "linear-gradient(160deg,#2d3748,#1a1a2e)", id: 2 },
    { type: "photo", bg: "linear-gradient(160deg,#1a1a2e,#2d4a3e)", id: 3 },
    { type: "hint", label: "With friends", icon: "👥" },
    { type: "hint", label: "Candid > posed", icon: "🖼" },
  ];
  const pct = (count / 6) * 100;
 
  return (
    <div style={{ minHeight: "100vh", background: token.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ padding: "40px 32px", width: 420, maxWidth: "100%" }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: token.text, marginBottom: 6 }}>Show your vibe</div>
        <div style={{ fontSize: 14, color: token.muted, marginBottom: 20 }}>Add up to 6 photos people will actually vibe with</div>
 
        {/* Progress */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: token.muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{count}/6 ADDED</div>
          <div style={{ height: 4, background: "#ddd", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", background: token.dark, borderRadius: 2, width: `${pct}%`, transition: "width 0.3s" }}/>
          </div>
        </div>
 
        {/* Tip */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: token.white, borderRadius: 12, padding: "10px 14px", marginBottom: 20,
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
        }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: token.bgAlt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>✦</div>
          <div style={{ fontSize: 13, color: "#444" }}>Profiles with 4+ photos get <strong>3x more invites</strong></div>
        </div>
 
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {slots.map((slot, i) => {
            if (slot.type === "add") return (
              <div key="add" style={{
                aspectRatio: "3/4", borderRadius: 14, background: "#e8e4f0",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                cursor: "pointer", gap: 6
              }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: token.dark, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 22 }}>+</div>
                <div style={{ fontSize: 12, color: token.muted, fontWeight: 600 }}>+ Add Photo</div>
              </div>
            );
            if (slot.type === "photo") return (
              <div key={slot.id} style={{
                aspectRatio: "3/4", borderRadius: 14, overflow: "hidden",
                background: slot.bg, position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <svg width="50" height="70" viewBox="0 0 50 70" fill="none" opacity="0.5">
                  <circle cx="25" cy="20" r="13" fill="white"/>
                  <path d="M4 65c0-11 9-18 21-18s21 7 21 18" fill="white"/>
                </svg>
                <button
                  onClick={() => setCount(c => Math.max(0, c - 1))}
                  style={{
                    position: "absolute", bottom: 6, left: 6, width: 22, height: 22,
                    background: token.pink, borderRadius: "50%", border: "none",
                    color: "#fff", fontSize: 11, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}
                >🗑</button>
              </div>
            );
            return (
              <div key={slot.label} style={{
                aspectRatio: "3/4", borderRadius: 14, background: "#e0ddf0",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer"
              }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#c8c4dc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{slot.icon}</div>
                <div style={{ fontSize: 10, color: token.muted, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700 }}>HINT</div>
                <div style={{ fontSize: 11, color: token.muted }}>{slot.label}</div>
              </div>
            );
          })}
        </div>
 
        <div style={{ marginTop: 24 }}>
          <PillButton onClick={onContinue} disabled={count < 1}>Continue →</PillButton>
        </div>
      </div>
    </div>
  );
}
