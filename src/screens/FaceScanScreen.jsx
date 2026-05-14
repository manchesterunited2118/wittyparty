import { useState } from "react";
import { token } from "../constants/tokens";


export default function FaceScanScreen({ onVerified }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
 
  const startScan = () => {
    if (scanning) return;
    setScanning(true);
    setProgress(0);
    const iv = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(iv); setTimeout(onVerified, 500); return 100; }
        return p + 3;
      });
    }, 60);
  };
 
  return (
    <div style={{
      minHeight: "100vh", background: "#0d1520",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden"
    }}>
      <style>{`@keyframes scanLine { 0%,100%{top:12%} 50%{top:82%} } @keyframes glow { 0%,100%{opacity:0.5} 50%{opacity:1} }`}</style>
 
      {/* Background ambient */}
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,200,180,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      }}/>
 
      <button style={{
        position: "absolute", top: 16, right: 16, width: 32, height: 32,
        background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%",
        color: "#fff", cursor: "pointer", fontSize: 15, zIndex: 10
      }}>✕</button>
 
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Outer ring */}
        <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg style={{ position: "absolute" }} width="320" height="320" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="152" fill="none" stroke="rgba(0,200,180,0.12)" strokeWidth="1.5" strokeDasharray="6 5"/>
            {scanning && (
              <circle cx="160" cy="160" r="152" fill="none" stroke="rgba(0,200,180,0.7)" strokeWidth="3"
                strokeDasharray={`${progress * 9.55} 9999`} strokeLinecap="round"
                transform="rotate(-90 160 160)" style={{ transition: "stroke-dasharray 0.08s" }}/>
            )}
          </svg>
 
          {/* Face oval */}
          <div style={{
            width: 220, height: 265, border: "2.5px solid rgba(255,255,255,0.75)",
            borderRadius: "50%", position: "relative", overflow: "hidden",
            background: "rgba(0,0,0,0.2)"
          }}>
            {/* Face art */}
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1a4050 0%, #0d2535 50%, #1a3a4a 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="160" height="200" viewBox="0 0 160 200" fill="none">
                <ellipse cx="80" cy="80" rx="55" ry="65" fill="rgba(0,180,160,0.25)" stroke="rgba(0,220,200,0.4)" strokeWidth="1"/>
                <circle cx="57" cy="66" r="7" fill="rgba(0,220,200,0.7)"/>
                <circle cx="103" cy="66" r="7" fill="rgba(0,220,200,0.7)"/>
                <path d="M60 96 Q80 112 100 96" stroke="rgba(0,220,200,0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M30 155 Q80 185 130 155 L140 200 L20 200Z" fill="rgba(0,180,160,0.15)"/>
                <rect x="55" y="4" width="50" height="24" rx="8" fill="rgba(200,220,255,0.12)"/>
                {/* Hair */}
                <path d="M25 72 Q80 20 135 72" stroke="rgba(180,140,100,0.5)" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Cheekbones */}
                <ellipse cx="40" cy="85" rx="12" ry="7" fill="rgba(0,220,200,0.1)"/>
                <ellipse cx="120" cy="85" rx="12" ry="7" fill="rgba(0,220,200,0.1)"/>
              </svg>
            </div>
 
            {/* Scan line */}
            {scanning && (
              <div style={{
                position: "absolute", left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, transparent, rgba(0,220,200,0.9), transparent)",
                animation: "scanLine 1.8s ease-in-out infinite"
              }}/>
            )}
 
            {/* Corner indicators */}
            <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 20, height: 3, background: "rgba(255,255,255,0.9)", borderRadius: 2 }}/>
            <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", width: 20, height: 3, background: "rgba(255,255,255,0.9)", borderRadius: 2 }}/>
 
            {/* Prompt */}
            <div style={{
              position: "absolute", top: "36%", left: "50%", transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)",
              borderRadius: 18, padding: "6px 18px", fontSize: 13, fontWeight: 700,
              color: token.dark, whiteSpace: "nowrap"
            }}>
              {scanning ? `Scanning… ${progress}%` : "Look straight"}
            </div>
          </div>
        </div>
 
        <div style={{ textAlign: "center", marginTop: 24, color: "#fff" }}>
          <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 5 }}>Keep your face within the frame</div>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)" }}>Center your face and wait for the scan to start</div>
          <div style={{
            marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "6px 16px",
            fontSize: 12, color: "rgba(255,255,255,0.75)"
          }}>
            🛡 Used only for verification
          </div>
        </div>
 
        {/* Controls */}
        <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 28 }}>
          <button style={{
            width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)",
            border: "none", cursor: "pointer", fontSize: 18, color: "#fff"
          }}>⟲</button>
          <button
            onClick={startScan}
            disabled={scanning}
            style={{
              width: 64, height: 64, borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.4)", background: "transparent",
              cursor: scanning ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}
          >
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: scanning ? "rgba(0,220,200,0.8)" : "#fff", transition: "background 0.3s" }}/>
          </button>
          <button style={{
            width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)",
            border: "none", cursor: "pointer", fontSize: 18, color: "#fff"
          }}>☀</button>
        </div>
      </div>
    </div>
  );
}
