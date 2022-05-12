import "./App.css";
import { data } from "./assets/data/faq-data-list";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import logo from "./assets/TWT_HEADER_9.jpg";
import logo from "./assets/logo.png";
import twitterLogo from "./assets/twitter2.png";
import discordLogo from "./assets/discord2.png";
import notionLogo from "./assets/notion8.png";
import { imagesDetails } from "./assets/scroll-animations/imagesDetails";
import { teams } from "./assets/data/teams";
import { roadmapList } from "./assets/data/roadmap-list";
import Faq_Div from "./assets/FAQ_Div.png";
import Roadmap_Div from "./assets/roadmap_div2.png";
import Prelude_Div from "./assets/prelude_div.png";
import Teams_Div from "./assets/teams_div.png";
import { useState } from "react";
import { FaEthereum, FaTimes } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
import { GoThreeBars } from "react-icons/go";
import { Visibility } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "90%",
  maxWidth: "100%",
  height: "90%",
  overflowY: "scroll",
};

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const handleClick = () => {
    const checkbox = document.getElementById("check") as HTMLInputElement;
    checkbox.checked = false;
  };

  return (
    <div className="main">
      {/* navbar section */}
      <nav>
        <input type="checkbox" name="checkbox" id="check" />
        <label htmlFor="check" className="checkbox-label">
          <span id="btn">
            <GoThreeBars />
          </span>
          <span id="cancel">
            <FaTimes />
          </span>
          {/* <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i> */}
          {/*  */}
        </label>
        <div className="logo">
          <a href="https://www.pastelpeeps.xyz/">
            <img className="logo-img" src={logo} alt="logo" loading="lazy" />
          </a>
        </div>
        <ul className="links-ul">
          <li className="">
            <a onClick={() => handleClick()} href="#prelude">
              Prelude
            </a>
          </li>
          <li className="">
            <a onClick={() => handleClick()} href="#roadmap">
              Roadmap
            </a>
          </li>
          <li className="">
            <a onClick={() => handleClick()} href="#faq">
              FAQ
            </a>
          </li>
          <li className="">
            <a onClick={() => handleClick()} href="#team">
              Team
            </a>
          </li>
        </ul>
        <ul className="social-media-ul">
          <li className="">
            <a
              onClick={() => handleClick()}
              href="http://discord.gg/PastelPeeps"
              target="_blank"
            >
              <img
                className="discord discord-logo"
                src={discordLogo}
                alt="Discord Logo"
                loading="lazy"
              />
            </a>
          </li>
          <li className="menu-items social-media-icons">
            <a
              onClick={() => handleClick()}
              href="https://twitter.com/PastelPeepsNFT"
              target="_blank"
            >
              <img
                className="twitter-logo"
                src={twitterLogo}
                alt="Twitter Logo"
                loading="lazy"
              />
            </a>
          </li>
          <li className="menu-items social-media-icons">
            <a
              onClick={() => handleClick()}
              href="https://pastelpeeps.notion.site/pastelpeeps/PastelPeepsNFT-f9293f8efcc24d6ea863c2f8ee10c5d3"
              target="_blank"
            >
              <img
                className="notion notion-logo"
                src={notionLogo}
                alt="Notion Logo"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </nav>
      {/* content section */}
      <div
        style={{ width: "100vw", height: "100vh", marginBottom: "5.2rem" }}
        className="main-marquee"
      >
        <div className="marquee">
          {imagesDetails.map((item, idx) => (
            <div className="marquee-content">
              <div className="inner-content-img">
                <img src={item.imageSrc} alt="" />
              </div>
              <div className="inner-content-text">
                {/* <span className="nft-name">{item.name}</span> */}
                <span className="nft-price">#{item.price}</span>
              </div>
              {/* <div className="inner-content-rating">
              <div className="rating">
                <FaEthereum />
                {item.price}
              </div>
              <div className="likes">
                <BiHeart />
                {item.likes}
              </div>
            </div> */}
            </div>
          ))}
        </div>

        <div className="marquee">
          {imagesDetails.map((item, idx) => (
            <div className="marquee-content2">
              <div className="inner-content-img">
                <img src={item.imageSrc} alt="" />
              </div>
              <div className="inner-content-text">
                {/* <span className="nft-name">{item.name}</span> */}
                <span className="nft-price">#{item.price}</span>
              </div>
              {/* <div className="inner-content-rating">
              <div className="rating">
                <FaEthereum />
                {item.price}
              </div>
              <div className="likes">
                <BiHeart />
                {item.likes}
              </div>
            </div> */}
            </div>
          ))}
        </div>
        <h1 className="minting-soon">MINTING SOON</h1>
      </div>

      {/* Prelude */}
      {/* <img src={Prelude_Div} alt="page divider" className="prelude-divider" /> */}
      <Fade left>
        <section className="prelude" id="prelude">
          <div className="prelude-title">Prelude</div>
          <div className="staking">
            {/* <div className="staking-title">Staking</div> */}
            <div className="staking-content">
              <Fade left>
                <span style={{ color: "#000" }}>
                  "The History we wrote, filled with colours and joy has been
                  stolen, it is up to the peeps to reclaim it" -Master Peep
                </span>
              </Fade>
              <Fade right>
                <p style={{ color: "#000" }}>
                  In a world where colour once filled every nook and cranny, and
                  the peeps lived happily A group of nefarious peeps have
                  devised a way to steal the colours of the peeps. This not only
                  made them dismal and bleaker, but made the nefarious peeps
                  stronger. This was when the resistance was formed: To fight
                  against the tyranny of the nefarious peeps and to reclaim the
                  colours they had once lost. As time passed the resistance of
                  50 had grown into the thousands. The peeps were now fed up of
                  their colours being stolen.
                </p>
              </Fade>
              <Fade left>
                <p style={{ color: "#000" }}>
                  Soon word spread to the nefarious ones, “Nonsense! The peeps
                  will never come back for their colors. We have made them too
                  weak to do so!” A nefarious peep said with a smirk.
                </p>
              </Fade>
              <Fade right>
                <p style={{ color: "#000" }}>
                  However, in due time, the peeps will prove otherwise and fight
                  towards bringing back their colour and bringing back the
                  original sense of community that was once loved by all.
                </p>
              </Fade>
              <Fade left>
                <p style={{ color: "#000" }}>PastelPeeps is the resistance.</p>
              </Fade>
              {/* <img className="prelude-img" src="prelude.png" alt="" /> */}
            </div>
          </div>
          {/* <img
            src={Roadmap_Div}
            alt="page divider"
            className="roadmap-divider"
          /> */}
        </section>
      </Fade>
      {/* Prelude ends */}

      {/* Roadmap */}
      <Fade left>
        <div className="prelude" id="roadmap">
          <div className="prelude-title">Roadmap</div>
          <div className="staking">
            {/* <div className="staking-title">Staking</div> */}
            <div className="staking-content">
              <img
                className="prelude-img"
                src="roadmap.jpg"
                alt=""
                loading="lazy"
              />
              <button className="read-more" onClick={handleOpen}>
                Read more...
              </button>
            </div>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="modal-text">
              {roadmapList.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div
                      style={{ fontWeight: "600", textDecoration: "underline" }}
                    >
                      {item.title}
                    </div>
                    <div>{item.description}</div>
                    <br />
                  </div>
                );
              })}
            </Box>
          </Modal>
          {/* <img src={Faq_Div} alt="page divider" className="faq-divider" /> */}
        </div>
      </Fade>
      {/* Roadmap ends */}

      {/* FAQs section */}
      <Slide left>
        <div className="wrapper" id="faq">
          <div className="container">
            <h3 className="faq-title">FAQ</h3>
            <div className="accordion">
              {data.map((item, idx) =>
                idx % 2 == 0 ? (
                  <Fade left>
                    <div className="item">
                      <div className="title" onClick={() => toggle(idx)}>
                        <h2 className="title-h2">{item.question}</h2>
                        <span className="accordion-icon">
                          {selected === idx ? "-" : "+"}
                        </span>
                      </div>
                      <div
                        className={
                          selected === idx ? "content show" : "content"
                        }
                      >
                        {item.answer}
                      </div>
                    </div>
                  </Fade>
                ) : (
                  <Fade right>
                    <div className="item">
                      <div className="title" onClick={() => toggle(idx)}>
                        <h2 className="title-h2">{item.question}</h2>
                        <span className="accordion-icon">
                          {selected === idx ? "-" : "+"}
                        </span>
                      </div>
                      <div
                        className={
                          selected === idx ? "content show" : "content"
                        }
                      >
                        {item.answer}
                      </div>
                    </div>
                  </Fade>
                )
              )}
            </div>
          </div>
          {/* <img src={Teams_Div} alt="page divider" className="teams-divider" /> */}
        </div>
      </Slide>
      {/* FAQs ends */}

      {/* Team card */}
      <div className="teams" id="team">
        <div className="prelude-title">TEAM</div>
        <div className="card">
          {teams.map((item, idx) => (
            <Slide left>
              <Card
                className="single-card"
                sx={{ height: 460 }}
                style={idx == 8 ? { visibility: "hidden" } : {}}
              >
                <CardMedia
                  component="img"
                  height="285"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ height: 110 }}>
                  <Typography
                    sx={{ fontFamily: "PaperNotes" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "PaperNotes" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ fontFamily: "PaperNotes" }}>
                  <div className="card-actions">
                    <span>Discord</span>
                    <div>
                      {/* <a
                      href={item.discordLink}
                      target="_blank"
                      style={{ color: "inherit" }}
                    > */}
                      {item.discordLink}
                      {/* </a> */}
                    </div>
                  </div>
                  <div
                    className="card-actions"
                    style={
                      item.twitterLink
                        ? { display: "flex", margin: "auto" }
                        : { display: "none" }
                    }
                  >
                    <span>Twitter</span>
                    <div>
                      <a
                        href={item.twitterLink}
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        {item.twitterHandle}
                      </a>
                    </div>
                  </div>
                </CardActions>
              </Card>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
