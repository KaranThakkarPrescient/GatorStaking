import { useEffect, useState } from "react";
import "./App.css";
import { imagesDetails } from "./assets/imagesDetails";

const App = () => {
  const [isNfts, setNfts] = useState([...imagesDetails]);
  const [isStakeActive, setStakeActive] = useState(false);
  const [isUnstakeActive, setUnstakeActive] = useState(false);

  useEffect(() => {
    setNfts(imagesDetails);
  }, []);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    if (id == "allSelect") {
      let tempNft = isNfts.map((item) => {
        return { ...item, isChecked: checked };
      });
      setNfts(tempNft);
    } else {
      let tempNft = isNfts.map((item) =>
        item.key == id ? { ...item, isChecked: checked } : item
      );
      setNfts(tempNft);
    }
  };

  const handleStakeActiveClass = () => {
    setStakeActive(!isStakeActive);
    setUnstakeActive(false);
  };
  const handleUnstakeActiveClass = () => {
    setUnstakeActive(!isUnstakeActive);
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
          <div className="select-all">
            <input
              type="checkbox"
              name="allSelect"
              id="allSelect"
              checked={
                isNfts.filter((item) => item?.isChecked !== true).length < 1
              }
              onChange={handleChange}
            />
            <label htmlFor="allSelect" className="select-all-label">
              Select All
            </label>
            {/* <button className="select-all-main">Select All</button> */}
          </div>
          <div className="stake-cards">
            {isStakeActive
              ? isNfts.map((item, idx) => (
                  <>
                    <label
                      htmlFor={item.key.toString()}
                      className="stake-card-label"
                    >
                      <input
                        type="checkbox"
                        name={item.key.toString()}
                        value={item.imageSrc}
                        id={item.key.toString()}
                        className="stake-checkbox"
                        checked={item?.isChecked || false}
                        onChange={handleChange}
                      />
                      <div className="card">
                        <div className="card-img">
                          <img
                            className="card-img-main"
                            src={item.imageSrc}
                            alt=""
                          />
                        </div>
                      </div>
                    </label>
                  </>
                ))
              : isNfts.map((item, idx) => (
                  <>
                    <label
                      htmlFor={item.key.toString()}
                      className="stake-card-label"
                    >
                      <input
                        type="checkbox"
                        name={item.key.toString()}
                        value={item.imageSrc}
                        id={item.key.toString()}
                        className="stake-checkbox"
                        checked={item?.isChecked || false}
                        onChange={handleChange}
                      />
                      <div className="card">
                        <div className="card-img">
                          <img
                            className="card-img-main"
                            src={item.name}
                            alt=""
                          />
                        </div>
                      </div>
                    </label>
                  </>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
