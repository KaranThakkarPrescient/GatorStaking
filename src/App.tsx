import { useEffect, useState } from "react";
import "./App.css";
import { imagesDetails } from "./assets/imagesDetails";
import Stake from "./Stake";
import UnStake from "./Unstake";

const App = () => {
  const [isStakeActive, setStakeActive] = useState(true);
  const [isUnstakeActive, setUnstakeActive] = useState(false);

  const handleStakeActiveClass = () => {
    setStakeActive(true);
    setUnstakeActive(false);
  };
  const handleUnstakeActiveClass = () => {
    setUnstakeActive(true);
    setStakeActive(false);
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="nav-img"></div>
      </div>
      <div className="stake-main">
        <div className="stake-bg">
          <div className="stake-btns">
            <div className="stake">
              <button
                className={
                  isStakeActive ? "stake-main-btn active" : "stake-main-btn"
                }
                onClick={handleStakeActiveClass}
              >
                Stake
              </button>
            </div>
            <div className="unstake">
              <button
                className={
                  isUnstakeActive
                    ? "unstake-main-btn active"
                    : "unstake-main-btn"
                }
                onClick={handleUnstakeActiveClass}
              >
                Unstake
              </button>
            </div>
          </div>
          {isStakeActive ? <Stake /> : <UnStake />}
        </div>
      </div>
    </div>
  );
};

export default App;
