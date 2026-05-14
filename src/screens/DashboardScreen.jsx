import { useState } from "react";
import CheckBenefit from "../components/shared/CheckBenefit";
import PillButton from "../components/shared/PillButton";
import Tag from "../components/shared/Tag";
import { token, gradPink, gradPurple } from "../constants/tokens";
import { SIDEBAR_ITEMS, HOW_IT_WORKS } from "../constants/data";


// const SIDEBAR_ITEMS = [
//   { icon: "📋", label: "My Plan" },
//   { icon: "🔨", label: "My Bids" },
//   { icon: "📅", label: "My Booking" },
//   { icon: "🔍", label: "Search" },
//   { icon: "💬", label: "Chat Room" },
//   { icon: "🔔", label: "Notifications" },
//   { icon: "🔖", label: "Save & Like" },
//   { icon: "🎁", label: "Rewards" },
// ];
 
// const HOW_IT_WORKS = [
//   { title: "Spot Your Person", desc: "Pick someone you'd genuinely enjoy going out with." },
//   { title: "Send a Drink", desc: "Offer their first drink your way of saying let's go out." },
//   { title: "They Accept → You're Set", desc: "Once accepted, it's a confirmed plan. No endless chatting." },
// ];
 
export default function DashboardScreen({ onGetVerified, onChooseHer }) {
  const [activeNav, setActiveNav] = useState(0);
 
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: token.bgAlt }}>
      {/* Sidebar */}
      <div style={{
        width: 220, background: token.white, borderRight: `1px solid ${token.border}`,
        display: "flex", flexDirection: "column", position: "fixed",
        top: 44, bottom: 0, left: 0, overflowY: "auto"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "16px 20px 16px", borderBottom: `1px solid ${token.border}` }}>
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
            <path d="M2 10C2 5 5.5 2 10 2s8 3 8 8" stroke={token.purple} strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M6 10c0-2.5 1.5-4 4-4s4 1.5 4 4" stroke={token.pink} strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M13 10c0-1.5 1-2.5 2.5-2.5S18 8.5 18 10" stroke={token.purple} strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: 17, fontWeight: 800, color: token.purple, letterSpacing: "-0.5px" }}>partywitty</span>
          <div style={{ marginLeft: "auto", background: token.bgAlt, borderRadius: 6, padding: "2px 6px", fontSize: 10, color: token.muted }}>⊞</div>
        </div>
 
        <nav style={{ padding: "10px 0", flex: 1 }}>
          {SIDEBAR_ITEMS.map((item, i) => (
            <div
              key={item.label}
              onClick={() => setActiveNav(i)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "11px 20px", cursor: "pointer", fontSize: 14,
                color: activeNav === i ? token.purple : "#444",
                background: activeNav === i ? "#ede9fb" : "transparent",
                borderRadius: "0 20px 20px 0", margin: "1px 8px 1px 0",
                fontWeight: activeNav === i ? 600 : 400,
                transition: "background 0.15s"
              }}
            >
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
 
        <div style={{ borderTop: `1px solid ${token.border}`, padding: "10px 0" }}>
          <div style={{ fontSize: 12, color: token.muted, padding: "4px 20px", display: "flex", alignItems: "center", gap: 6 }}>
            ≡ More
          </div>
          <div style={{ margin: "6px 10px", background: token.dark, borderRadius: 10, padding: "8px 10px" }}>
            <div style={{ fontSize: 10, color: "#ffd700", fontWeight: 700 }}>👑 Corporate Employee Offer</div>
            <div style={{ fontSize: 11, color: "#fff", marginTop: 2 }}>1 Month For ₹1</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", cursor: "pointer" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: gradPurple, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>👤</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: token.text }}>Zeeshan Ahmad</div>
              <div style={{ fontSize: 10, color: token.muted }}>Indus Global Pvt Ltd Admin</div>
            </div>
            <span style={{ marginLeft: "auto", fontSize: 13, color: token.muted }}>↗</span>
          </div>
        </div>
      </div>
 
      {/* Main */}
      <div style={{ marginLeft: 220, flex: 1, display: "flex", justifyContent: "center", padding: "24px 32px", gap: 32, flexWrap: "wrap" }}>
        {/* Feed */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <button style={{
            background: token.purple, color: token.white, border: "none", borderRadius: 50,
            padding: "10px 32px", fontWeight: 700, fontSize: 13, cursor: "pointer", letterSpacing: 1
          }}>
            EXPLORE FEED
          </button>
 
          {/* Profile card */}
          <div style={{
            width: 300, borderRadius: 24, overflow: "hidden",
            boxShadow: "0 12px 48px rgba(0,0,0,0.13)", position: "relative"
          }}>
            {/* Image area */}
            <div style={{
              height: 400, position: "relative",
              background: "linear-gradient(160deg, #b8d4c8 0%, #7aaa9a 50%, #4a7a6a 100%)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg width="120" height="160" viewBox="0 0 120 160" fill="none" opacity="0.4">
                <circle cx="60" cy="52" r="32" fill="white"/>
                <path d="M10 150c0-30 22-46 50-46s50 16 50 46" fill="white"/>
              </svg>
              {/* Vibe badge */}
              <div style={{
                position: "absolute", top: 12, left: 12,
                background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                borderRadius: 20, padding: "4px 10px", fontSize: 11, color: token.white,
                display: "flex", alignItems: "center", gap: 4
              }}>
                <span style={{ fontSize: 7 }}>●</span> Matches Your Vibe
              </div>
              {/* Overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.78))",
                padding: "60px 16px 16px"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ color: token.white, fontWeight: 700, fontSize: 19 }}>Zoe Miller, 22 </span>
                    <span style={{ color: "#60a5fa" }}>✓</span>
                  </div>
                  <button
                    onClick={onChooseHer}
                    style={{
                      background: token.pink, color: token.white, border: "none",
                      borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer"
                    }}
                  >
                    + Mate
                  </button>
                </div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 2 }}>4 Mutual Mates</div>
                <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                  {["Bollywood Nights", "Chill Crowd", "Party Regular"].map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
          </div>
 
          {/* Action buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button style={{
              width: 48, height: 48, borderRadius: "50%", border: "none", cursor: "pointer",
              background: token.white, fontSize: 18, color: "#888",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)"
            }}>✕</button>
            <button
              onClick={onChooseHer}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: gradPink, color: token.white, border: "none",
                borderRadius: 50, padding: "13px 28px", fontWeight: 700, fontSize: 15,
                cursor: "pointer", boxShadow: "0 4px 20px rgba(233,30,140,0.35)"
              }}
            >
              🎉 Go Tonight
            </button>
            <button style={{
              width: 48, height: 48, borderRadius: "50%", border: "none", cursor: "pointer",
              background: token.white, fontSize: 20, color: token.pink,
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)"
            }}>♡</button>
          </div>
        </div>
 
        {/* Right panel */}
        <div style={{
          width: 290, background: token.white, borderRadius: 20, padding: 24,
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)", height: "fit-content"
        }}>
          <div style={{
            width: 68, height: 68, borderRadius: "50%", background: gradPurple,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, margin: "0 auto 12px"
          }}>👤</div>
          <div style={{ fontSize: 17, fontWeight: 700, textAlign: "center", color: token.text }}>Make Your First Move</div>
          <div style={{ fontSize: 12.5, color: token.muted, textAlign: "center", marginTop: 4, marginBottom: 18 }}>
            Verify your profile to start sending invites and offering drinks.
          </div>
 
          <div style={{ fontSize: 13, fontWeight: 700, color: token.text, marginBottom: 12 }}>How It Works</div>
          {HOW_IT_WORKS.map((h, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 10,
                  background: "linear-gradient(135deg, #d4e8c8, #a8c898)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18
                }}>🍋</div>
                <div style={{
                  position: "absolute", top: -5, left: -5, width: 18, height: 18,
                  background: token.pink, color: token.white, borderRadius: "50%",
                  fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center"
                }}>2</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: token.text }}>{h.title}</div>
                <div style={{ fontSize: 11, color: token.muted, marginTop: 2 }}>{h.desc}</div>
              </div>
            </div>
          ))}
 
          <hr style={{ border: "none", borderTop: `1px solid ${token.border}`, margin: "14px 0" }}/>
 
          {["Get noticed faster", "Higher chances your invite gets accepted", "Unlock drink invites & premium interactions", "Build trust with every profile visit"].map(b => (
            <CheckBenefit key={b}>{b}</CheckBenefit>
          ))}
 
          <PillButton onClick={onGetVerified} style={{ marginTop: 8 }}>Get Verified</PillButton>
          <div style={{ textAlign: "center", fontSize: 12, color: token.muted, marginTop: 8 }}>Takes less than 60 seconds</div>
          <div style={{ textAlign: "center", fontSize: 12, color: token.muted, marginTop: 6, textDecoration: "underline", cursor: "pointer" }}>Maybe later</div>
        </div>
      </div>
    </div>
  );
}
