import React from 'react'
import PillButton from "../components/shared/PillButton";
import { token } from "../constants/tokens";


export default function VerifyPromptScreen({ onVerify }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 200, animation: "fadeIn 0.25s ease"
    }}>
      <div style={{
        background: token.bg, borderRadius: 24, padding: "40px 32px",
        width: 340, textAlign: "center", position: "relative",
        boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
        animation: "slideUp 0.35s cubic-bezier(0.34,1.2,0.64,1)"
      }}>
        {/* Avatar */}
        <div style={{
          width: 160, height: 160, border: `2px dashed ${token.border}`, borderRadius: 24,
          margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", background: "#ece9f3"
        }}>
          <div style={{
            width: 100, height: 120, borderRadius: "50%", border: "2px solid #555",
            display: "flex", alignItems: "center", justifyContent: "center", background: "#e0ddf0"
          }}>
            <svg width="50" height="58" viewBox="0 0 50 58" fill="none">
              <circle cx="25" cy="18" r="13" stroke="#555" strokeWidth="2"/>
              <path d="M5 54c0-11 9-18 20-18s20 7 20 18" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="19" cy="18" r="2" fill="#555"/>
              <circle cx="31" cy="18" r="2" fill="#555"/>
            </svg>
          </div>
          <div style={{
            position: "absolute", top: -8, right: -8, width: 28, height: 28,
            background: "#666", borderRadius: "50%", display: "flex",
            alignItems: "center", justifyContent: "center"
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" fill="#888"/>
              <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
 
        <div style={{ fontSize: 20, fontWeight: 700, color: token.text, marginBottom: 10 }}>
          You're one step away
        </div>
        <div style={{ fontSize: 13, color: token.muted, lineHeight: 1.7, marginBottom: 24 }}>
          Verify your profile to send this invite and connect with people around you.
        </div>
 
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
          {["Builds trust instantly", "Better chances she accepts", "Unlocks special invites"].map(b => (
            <span key={b} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5, color: token.text }}>
              <span style={{ color: token.green, fontWeight: 700 }}>✓</span> {b}
            </span>
          ))}
        </div>
 
        <PillButton onClick={onVerify}>Verify &amp; Send Invite</PillButton>
        <div style={{ marginTop: 10, fontSize: 10, color: token.muted, letterSpacing: 1, textTransform: "uppercase" }}>
          Takes less than 30 seconds
        </div>
      </div>
    </div>
  );
}
