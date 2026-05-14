import { useState } from "react";
import VerifyPromptScreen from "./screens/VerifyPromptScreen";
import FaceScanScreen from "./screens/FaceScanScreen";
import VerifiedScreen from "./screens/VerifiedScreen";
import ShowVibeScreen from "./screens/ShowVibeScreen";
import YouChoseHerScreen from "./screens/YouChoseHerScreen";
import TopNav from "./components/layout/TopNav";
import { token } from "./constants/tokens";
import DashboardScreen from './screens/DashboardScreen'

export default function App() {
  const [screen, setScreen] = useState("DASHBOARD");
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const nav = (s) => {
    setScreen(s);
    setShowVerifyModal(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <TopNav screen={screen} nav={nav} />

      <div style={{ paddingTop: 40 }}>
        {screen === "DASHBOARD" && (
          <DashboardScreen
            onGetVerified={() => nav("FACE_SCAN")}
            onChooseHer={() => nav("YOU_CHOSE_HER")}
          />
        )}

        {screen === "VERIFY_PROMPT" && (
          <div style={{ minHeight: "100vh", background: token.bg, position: "relative" }}>
            <VerifyPromptScreen onVerify={() => nav("FACE_SCAN")} />
          </div>
        )}

        {screen === "FACE_SCAN" && (
          <FaceScanScreen onVerified={() => nav("VERIFIED")} />
        )}

        {screen === "VERIFIED" && (
          <VerifiedScreen onDashboard={() => nav("SHOW_VIBE")} />
        )}

        {screen === "SHOW_VIBE" && (
          <ShowVibeScreen onContinue={() => nav("DASHBOARD")} />
        )}

        {screen === "YOU_CHOSE_HER" && (
          <YouChoseHerScreen onBack={() => nav("DASHBOARD")} />
        )}
      </div>
    </div>
  );
}