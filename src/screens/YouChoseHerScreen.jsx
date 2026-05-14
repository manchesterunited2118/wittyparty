import Tag from "../components/shared/Tag";
import { token, gradPink } from "../constants/tokens";

export default function YouChoseHerScreen({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: token.bgAlt, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`@keyframes popIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }`}</style>
      <div style={{ width: 360, animation: "popIn 0.35s cubic-bezier(0.34,1.2,0.64,1)" }}>
        {/* Header */}
        <div style={{
          background: token.white, borderRadius: "16px 16px 0 0",
          border: "2px dashed #a899f0", padding: "16px 20px"
        }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: token.text }}>You chose her</div>
          <div style={{ fontSize: 13, color: token.muted, marginTop: 2 }}>
            You're about to send her a <span style={{ color: token.pink, fontWeight: 600 }}>special invite</span>
          </div>
        </div>
 
        {/* Profile card */}
        <div style={{ border: "2px dashed #a899f0", borderTop: "none", background: token.white, overflow: "hidden" }}>
          <div style={{
            height: 400, position: "relative",
            background: "linear-gradient(160deg, #b8a8d8 0%, #8870b8 40%, #3a2a5a 100%)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            {/* Casual Fun badge */}
            <div style={{
              position: "absolute", top: 12, left: 12,
              background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)",
              borderRadius: 20, padding: "4px 10px", fontSize: 11, color: token.white,
              display: "flex", alignItems: "center", gap: 4
            }}>
              <span style={{ fontSize: 7 }}>●</span> Casual Fun
            </div>
 
            {/* Person art */}
            <svg width="200" height="300" viewBox="0 0 200 300" fill="none" opacity="0.75">
              <circle cx="100" cy="72" r="46" fill="rgba(255,200,180,0.35)" stroke="rgba(255,180,160,0.25)" strokeWidth="2"/>
              <path d="M28 280 Q100 238 172 280 L200 300 L0 300Z" fill="rgba(180,160,200,0.25)"/>
              {/* Sunglasses */}
              <rect x="62" y="62" width="28" height="16" rx="8" fill="rgba(0,0,0,0.65)"/>
              <rect x="108" y="62" width="28" height="16" rx="8" fill="rgba(0,0,0,0.65)"/>
              <line x1="90" y1="70" x2="108" y2="70" stroke="rgba(0,0,0,0.4)" strokeWidth="2"/>
              {/* Hair */}
              <path d="M54 68 Q100 22 146 68" stroke="rgba(60,20,10,0.5)" strokeWidth="10" fill="none" strokeLinecap="round"/>
              {/* Long hair sides */}
              <path d="M56 70 Q35 120 40 180" stroke="rgba(60,20,10,0.35)" strokeWidth="12" fill="none" strokeLinecap="round"/>
              <path d="M144 70 Q165 120 160 180" stroke="rgba(60,20,10,0.35)" strokeWidth="12" fill="none" strokeLinecap="round"/>
            </svg>
 
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(transparent, rgba(20,10,40,0.85))" }}/>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
              <div>
                <span style={{ fontSize: 21, fontWeight: 700, color: token.white }}>Zoe Miller, 22 </span>
                <span style={{ color: "#60a5fa" }}>✓</span>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>4 Mutual Mates</div>
              <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                {["Bollywood Nights", "Chill Crowd", "Party Regular"].map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </div>
 
          {/* CTA */}
          <div>
            <button style={{
              width: "100%", padding: "16px 0",
              background: gradPink, color: token.white, border: "none",
              fontWeight: 700, fontSize: 16, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: "0 4px 20px rgba(233,30,140,0.3)"
            }}>
              🎯 Make Your Move
            </button>
            <div style={{ textAlign: "center", fontSize: 13, color: token.muted, padding: "12px 0 16px" }}>
              Add a drink to introduce yourself
            </div>
          </div>
        </div>
 
        <button
          onClick={onBack}
          style={{
            display: "block", margin: "14px auto 0", background: "transparent", border: "none",
            color: token.muted, cursor: "pointer", fontSize: 13, textDecoration: "underline"
          }}
        >
          ← Back to feed
        </button>
      </div>
    </div>
  );
}
