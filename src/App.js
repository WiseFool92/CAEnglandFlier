// import logo from './logo.svg';
import "./App.css";
import redWaterLotus from "./img/redWaterLotus.webp";
import whiteLotus3 from "./img/whiteLotus3.jpeg";
// import Ann from './img/ann.jpg';
// import annLogo from './img/annLogo.jpg';
import newHarmonyHeader from "./img/newHarmonyHeader.jpg";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import React from "react";
import greenWoodlandYurt from "./img/greenWoodlandYurt.jpg";
import roseChalet from "./img/roseChalet.jpg";
import trevellanMagicSpaceLogo from "./img/trevellanMagicSpaceLogo.png";
import consciousLogo from "./img/consciousLogo.jpg";
import footerImg from "./img/footerImg.jpg";

// const homeBackground = {
//   backgroundColor: "#37659D",
// };
const titles = {
  color: "#3B0D11",
  // color: "#F7D488",
};
const parallaxLanding = {
  backgroundImage: `url(${redWaterLotus})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};
const parallaxWhiteLotus = {
  backgroundImage: `url(${whiteLotus3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "25vh",
};
const list = {
  listStyleType: "none",
};
const pounds = {
  padding: ".25rem",
};
const courseSavings = {
  color: "green",
};
const logoStyle = {
  maxHeight: "8.2vh",
  height: "100%",
  cursor: "pointer",
  borderRadius: ".5rem",
};
const logoCourseStyle = {
  maxHeight: "8.2vh",
  height: "100%",
  cursor: "pointer",
  borderRadius: ".5rem",
  width: "50%",
  margin: "auto",
};
const images = {
  borderRadius: "2rem",
};
const trevellanLogo = {
  width: "10vw",
};
const footerStyle = {
  width: "50%",
  maxHeight: "25vh",
  borderRadius: ".5rem",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Come Study in Cornwall, England at Trevellan Magic Space</h1>
        <h2>Conscious Anatomy™ & Reactive Triads Courses™</h2>
        <p>Taught by: Ann Watkins</p>
        <a href="http://www.newharmonymassage.com/index.htm">
          <img
            className="p-1"
            src={newHarmonyHeader}
            alt="New Harmony Logo"
            style={logoStyle}
          />
        </a>
        <p>↓↓ Scroll Down for Details ↓↓</p>
      </header>

      <div className="jumbotron section1" style={parallaxLanding}></div>

      <div className="container p-3">
        <div className="row">
          <h1 style={titles}>
            <strong>Trevellan Magic Space</strong>
          </h1>
          <hr />
          <p>
            Close to the buzzing harbourside town of Falmouth, and the virgin
            oak forests of the Helford Estuary, this magical space for rest,
            renewal and inspiration in nature offers volunteering,
            self-discovery, holidays, bespoke retreats and artist residencies.
            With two beautiful traditional Mongolian Yurts, two wooden studio
            spaces, meandering woodland paths and a hilltop fire circle. Come
            and immerse yourself in a haven of peace filled with stars (no light
            pollution!) deep silence (filled with birdsong), self-wilded Oak,
            Ash, Hawthorn, Blackthorn, Rose and Sycamore woodland.
          </p>
          <h1 style={titles}>Course Dates & Information</h1>
          <hr />
          <a href="http://www.newharmonymassage.com/index.htm">
            <img
              className="p-1"
              src={newHarmonyHeader}
              alt="New Harmony Logo"
              style={logoCourseStyle}
            />
          </a>
          <div className="col-md-12 p-3">
            <div class="card">
              {/* <div class="card" style={card}> */}
              <div class="card-body">
                <h5 class="card-title">Conscious Anatomy™</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  Bones Planes and Directions
                </h6>
                <a href="https://www.consciousanatomy.com/">
                  <img
                    className="p-1"
                    src={consciousLogo}
                    alt="New Harmony Logo"
                    style={logoStyle}
                  />
                </a>
                <p class="card-text">
                  <ul style={list}>
                    <li>Sept. 6 - 9</li>
                    <li>10:00am - 3:30pm w/Lunch Break (No Food Included)</li>
                    <li>
                      {" "}
                      <a href="https://www.consciousanatomy.com/conscious-anatomy-course-1-1-1">
                        <Button>$ USD Registration</Button>
                      </a>{" "}
                    </li>
                    {/* <li style={pounds}>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/DjdgZEJF ">
                        <Button>£ GBP Registration</Button>
                      </a>{" "}
                    </li> */}
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 p-3">
            <div class="card">
              <h1 style={courseSavings}>**Three Course Special**</h1>
              <p style={courseSavings}>
                <strong>
                  Save $150.00 USD or £124.78 when you invest in all three
                  courses: $647.00 USD or £538.00 Pounds
                </strong>
              </p>
              <div class="card-body">
                <h5 class="card-title">Reactive Triads™</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  2 Part Course + Basics and Subtleties of Muscle Testing
                </h6>
                <p class="card-text">
                  <ul style={list}>
                    <li>Sept. 12 - 16</li>
                    <li>10:00am - 7:00pm w/Lunch</li>
                    <li>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/TDy4qw9t/checkout">
                        <Button>$ USD Registration</Button>
                      </a>{" "}
                    </li>
                    <li style={pounds}>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/wTG6RAgo">
                        <Button>£ GBP Registration</Button>
                      </a>{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 p-3">
            <h3 style={titles}>Course Offerings</h3>
            <a href="http://www.newharmonymassage.com/index.htm">
              <img
                className="p-1"
                src={newHarmonyHeader}
                alt="New Harmony Logo"
                style={logoCourseStyle}
              />
            </a>
          </div>
          <div className="col-md-4 p-3">
            <div class="card">
              {/* <div class="card" style={card}> */}
              <div class="card-body">
                <h5 class="card-title">Reactive Triads™</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  Basics and Subtleties of Muscle Testing
                </h6>
                <p class="card-text">
                  <ul style={list}>
                    <li>Sept. 12</li>
                    <li>10:00am - 7:00pm w/Lunch</li>
                    <li>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/2KdCwg3b/checkout">
                        <Button>$ USD Registration</Button>
                      </a>{" "}
                    </li>
                    <li style={pounds}>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/L5hMZRGv">
                        <Button>£ GBP Registration</Button>
                      </a>{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-3">
            <div class="card">
              {/* <div class="card" style={card}> */}
              <div class="card-body">
                <h5 class="card-title">Reactive Triads™</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  Muscle Triads & Jolts
                </h6>
                <p class="card-text">
                  <ul style={list}>
                    <li>Sept. 13 - 14</li>
                    <li>10:00am - 7:00pm w/Lunch</li>
                    <li>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/6FTVxKYo/checkout">
                        <Button>$ USD Registration</Button>
                      </a>{" "}
                    </li>
                    <li style={pounds}>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/mCqrb9pg">
                        <Button>£ GBP Registration</Button>
                      </a>{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div class="card">
              {/* <div class="card" style={card}> */}
              <div class="card-body">
                <h5 class="card-title">Reactive Triads™</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  Muscle lymph and Mixed Triads
                </h6>
                <p class="card-text">
                  <ul style={list}>
                    <li>Sept. 15 - 16</li>
                    <li>10:00am - 7:00pm w/Lunch</li>
                    <li>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/Botsvpmr/checkout">
                        <Button>$ USD Registration</Button>
                      </a>{" "}
                    </li>
                    <li style={pounds}>
                      {" "}
                      <a href="https://www.consciousanatomy.com/offers/XxSVziYL">
                        <Button>£ GBP Registration</Button>
                      </a>{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron section2" style={parallaxWhiteLotus}></div>

      <div className="container p-1">
        <div className="row">
          <h1 style={titles}>Accommodations</h1>
          <hr />
          <p>*Please Note*</p>
          <p>The links below are for viewing purposes only.</p>
          <p>
            To Book Contact Jackie Calderwood:
            <a className="p-1" href="mailto:jackie@trevellanmagic.space">
              <Button>Email</Button>
            </a>
            <a href="tel:+44 (0)7816 639534">
              <Button>Call</Button>
            </a>
            <br />
            <a href="https://trevellanmagic.space/">
              <img
                alt="Trevellan Magic Space"
                src={trevellanMagicSpaceLogo}
                className="p-1"
                style={trevellanLogo}
              ></img>
            </a>
          </p>

          <div className="col-md-6">
            <h2 style={titles}>Woodland Yurt</h2>
            <a href="https://www.airbnb.co.uk/rooms/50341439">
              <Button>View</Button>
            </a>
            <br />
            <img
              alt="Green Woodland Yurt"
              src={greenWoodlandYurt}
              className="p-1"
              style={images}
            ></img>
            <p>
              Yurt stay is dorm-style for $40.00 USD or £33.27 Pounds per night
              plus a one-time weekly charge of $35.00 USD or £29.11 Pounds for
              bedding and cleaning with a shared outdoor bathroom, shower, sink,
              fire pit
            </p>
          </div>
          <div className="col-md-6">
            <h2 style={titles}>Rose Chalet</h2>
            <a href="https://www.airbnb.co.uk/rooms/50051591">
              <Button>View</Button>
            </a>
            <br />
            <img
              alt="Green Woodland Yurt"
              src={roseChalet}
              className="p-1"
              style={images}
            ></img>
            <p>
              The chalet includes bedding, an indoor bathroom, and a kitchen and
              is located on campus for a charge of $90.00 USD or £74.87 Pounds
              per room per night with a one-time weekly charge of $60.00 USD or
              £49.91 Pounds for cleaning
            </p>
          </div>
        </div>
        <div className="row">
          <h2 style={titles}>Flats</h2>
          <p>
            2 Flats include bedding, indoor bathroom, and kitchen; you will need
            a car or taxi and bus because they are located about 15min. away
            from campus; the cost per bedroom per night is $90.00 USD or £74.87
            Pounds plus a one-time weekly charge of $60.00 USD or £49.91 Pounds
            for cleaning
          </p>
          <div className="col-md-6">
            <h2 style={titles}>Falmouth Flat</h2>

            <a href="https://www.airbnb.co.uk/rooms/13130762">
              <Button>View</Button>
            </a>
          </div>
          <div className="col-md-6">
            <h2 style={titles}>Penryn Flat</h2>

            <a href="https://www.airbnb.co.uk/rooms/50915835">
              <Button>View</Button>
            </a>
          </div>
        </div>
      </div>

      <img src={footerImg} style={footerStyle} alt="Trevellan Magic Site"></img>
    </div>
  );
}

export default App;
