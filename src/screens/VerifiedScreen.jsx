import PillButton from "../components/shared/PillButton";
import { token, gradPurple } from "../constants/tokens";


export default function VerifiedScreen({ onDashboard }) {
  return (
    <div style={{ minHeight: "100vh", background: token.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`@keyframes popIn { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} } @keyframes sparkle { 0%,100%{transform:scale(1) rotate(0deg);opacity:0.6} 50%{transform:scale(1.4) rotate(20deg);opacity:1} }`}</style>
      <div style={{
        background: token.bg, borderRadius: 24, padding: "48px 40px",
        width: 360, textAlign: "center",
        animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)"
      }}>
        {/* Avatar */}
        <div style={{ position: "relative", width: 156, height: 156, margin: "0 auto 8px" }}>
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(91,79,207,0.12) 0%, transparent 70%)"
          }}/>
          <div style={{
            position: "absolute", inset: 14, borderRadius: "50%",
            background: "linear-gradient(135deg, #4fc3c8, #3a9da3)",
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="120" height="128" viewBox="0 0 120 128" fill="none">
              <rect width="120" height="128" fill="#3a9da3"/>
              <rect x="18" y="0" width="84" height="95" rx="8" fill="#2d3748" opacity="0.8"/>
              <circle cx="60" cy="38" r="22" fill="#4a5568"/>
              <path d="M20 105 Q60 87 100 105 L104 128 L16 128Z" fill="#4a5568"/>
              <rect x="28" y="68" width="64" height="10" rx="4" fill="#22c55e" opacity="0.9"/>
              <text x="60" y="77" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="sans-serif">VERIFIED</text>
            </svg>
          </div>
          {/* Verified badge */}
          <div style={{
            position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)",
            background: token.green, color: token.white, borderRadius: 20, padding: "4px 12px",
            fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 4,
            whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(34,197,94,0.4)"
          }}>✓ VERIFIED</div>
          {/* Decorations */}
          <div style={{ position: "absolute", top: 6, right: -2, fontSize: 20, color: "#7c6fd4", animation: "sparkle 1.5s infinite" }}>✦</div>
          <div style={{ position: "absolute", bottom: 24, left: -4, fontSize: 18, color: "#7c6fd4", animation: "sparkle 1.8s infinite 0.3s" }}>♡</div>
        </div>
 
        <div style={{ fontSize: 34, fontWeight: 800, color: token.text, marginTop: 18, marginBottom: 6 }}>You're verified</div>
        <div style={{ fontSize: 14, color: token.muted, marginBottom: 26 }}>No fake vibes here. You're almost in</div>
 
        {/* Progress */}
        <div style={{ marginBottom: 30 }}>
          <div style={{ height: 7, background: "#e0ddf0", borderRadius: 4, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ height: "100%", borderRadius: 4, background: gradPurple, width: "98.4%", transition: "width 1s ease" }}/>
          </div>
          <div style={{ fontSize: 11, color: token.muted, textTransform: "uppercase", letterSpacing: 1 }}>Identity Match 98.4%</div>
        </div>
 
        <PillButton onClick={onDashboard} gradient={gradPurple}>Go to Dashboard</PillButton>
        <div style={{ fontSize: 12, color: "#bbb", marginTop: 12 }}>No fake vibes here. You're almost in</div>
      </div>
    </div>
  );
}
