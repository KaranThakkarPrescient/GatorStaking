import { useEffect, useState } from "react";
import { imagesDetails } from "./assets/imagesDetails";

const UnStake = () => {
  const [isUnstakeNfts, setUnstakeNfts] = useState([...imagesDetails]);

  useEffect(() => {
    setUnstakeNfts(imagesDetails);
  }, []);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    if (id == "allSelect") {
      let tempNft = isUnstakeNfts.map((item) => {
        return { ...item, isChecked: checked };
      });
      setUnstakeNfts(tempNft);
    } else {
      let tempNft = isUnstakeNfts.map((item) =>
        item.key == id ? { ...item, isChecked: checked } : item
      );
      setUnstakeNfts(tempNft);
    }
  };

  return (
    <div className="main-select">
      <div className="select-all">
        <label htmlFor="allSelect" className="select-all-label">
          <input
            type="checkbox"
            name="allSelect"
            id="allSelect"
            checked={
              isUnstakeNfts.filter((item) => item?.isChecked !== true).length <
              1
            }
            onChange={handleChange}
          />
          Select All
        </label>
        <button className="confirm-btn">Confirm</button>
      </div>
      <div className="stake-cards">
        {isUnstakeNfts.map((item, idx) => (
          <>
            <label htmlFor={item.key.toString()} className="stake-card-label">
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
                  <img className="card-img-main" src={item.name} alt="" />
                </div>
              </div>
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default UnStake;
