import { useEffect, useState } from "react";
import { imagesDetails } from "./assets/imagesDetails";

const Stake = () => {
  const [isNfts, setNfts] = useState([...imagesDetails]);

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

  return (
    <>
      <div className="select-all">
        <input
          type="checkbox"
          name="allSelect"
          id="allSelect"
          checked={isNfts.filter((item) => item?.isChecked !== true).length < 1}
          onChange={handleChange}
        />
        <label htmlFor="allSelect" className="select-all-label">
          Select All
        </label>
        {/* <button className="select-all-main">Select All</button> */}
      </div>
      <div className="stake-cards">
        {isNfts.map((item, idx) => (
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
                  <img className="card-img-main" src={item.imageSrc} alt="" />
                </div>
              </div>
            </label>
          </>
        ))}
      </div>
    </>
  );
};

export default Stake;
