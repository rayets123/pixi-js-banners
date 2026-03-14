import React from "react";
import FirstDepositPixi from "./pixi/FirstDepositPixi";
import GameOfMonthPixi from "./pixi/GameOfMonthPixi";
import LoyaltyPixi from "./pixi/LoyaltyPixi";
import RegisterBonusPixi from "./pixi/RegisterBonusPixi";

const App: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#050816",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        padding: 0
      }}
    >
      {[
        <FirstDepositPixi key="1st" />,
        <GameOfMonthPixi key="gom" />,
        <LoyaltyPixi key="loyalty" />,
        <RegisterBonusPixi key="reg" />
      ].map(comp => (
        <div
          key={comp.key}
          style={{
            width: "100%",
            maxWidth: 1440,
            aspectRatio: "1440 / 800",
            minHeight: 0,
            position: "relative"
          }}
        >
          {comp}
        </div>
      ))}
    </div>
  );
};

export default App;

