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
const courseSavings = {
  color: "green",
};
const logoStyle = {
  maxHeight: "8.2vh",
  height: "100%",
  cursor: "pointer",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Come Study in Cornwall, England</h1>
        <h2>Conscious Anatomy™ & Reactive Triads Courses™</h2>
        <p>Taught by: Ann Watkins</p>
        <p>↓↓ Scroll Down for Details ↓↓</p>
      </header>

      <div className="jumbotron section1" style={parallaxLanding}></div>

      <div className="container p-3">
        <div className="row">
          <h1 style={titles}><strong>Trevellan Magic Space</strong></h1>
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
          <div className="col-md-12 p-3">
            <div class="card">
              {/* <div class="card" style={card}> */}
              <div class="card-body">
                <h5 class="card-title">Conscious Anatomy™</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  Bones Planes and Directions
                </h6>
                <p class="card-text">
                  <ul style={list}>
                    <li>Sept. 6 - 9</li>
                    <li>10:00am - 3:30pm w/Lunch</li>
                    <li>
                      {" "}
                      <a href="https://www.consciousanatomy.com/conscious-anatomy-course-1-1-1">
                        <Button>Registration</Button>
                      </a>{" "}
                    </li>
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
                  Save $150.00 when you invest in all three courses: $647.00
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
                        <Button>Registration</Button>
                      </a>{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 p-3">
            <h3 style={titles}>Course Offerings</h3>
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
                        <Button>Registration</Button>
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
                        <Button>Registration</Button>
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
                        <Button>Registration</Button>
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
          <p>*Please Note*</p>
          <p>The links below are for viewing purposes only.</p>
          <p>
            To Book Contact Jackie Caldwell:
            <a className="p-1" href="mailto:jackie@trevellanmagic.space">
              <Button>Email</Button>
            </a>
            <a href="tel:+44 (0)7816 639534">
              <Button>Call</Button>
            </a>
          </p>
          <hr />
          <div className="col-md-6">
            <h2 style={titles}>Woodland Yurt</h2>
            <a href="https://www.airbnb.co.uk/rooms/50341439">
              <Button>View</Button>
            </a>
            <p>
              Yurt stay is dorm-style for $40.00 per night plus a one-time
              weekly charge of $35.00 for bedding and cleaning with a shared
              outdoor bathroom, shower, sink, fire pit
            </p>
          </div>
          <div className="col-md-6">
            <h2 style={titles}>Rose Chalet</h2>

            <a href="https://www.airbnb.co.uk/rooms/50051591">
              <Button>View</Button>
            </a>
            <p>
              The chalet includes bedding, an indoor bathroom, and a kitchen and
              is located on campus for a charge of $90.00 per room per night
              with a one-time weekly charge of $60.00 for cleaning
            </p>
          </div>
        </div>
        <div className="row">
          <h2 style={titles}>Flats</h2>
          <p>
            2 Flats include bedding, indoor bathroom, and kitchen; you will need
            a car or taxi and bus because they are located about 15min. away
            from campus; the cost per bedroom per night is $90.00 plus a
            one-time weekly charge of $60.00 for cleaning
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
      <img
        className="p-1"
        src={newHarmonyHeader}
        alt="Logo"
        style={logoStyle}
      />
    </div>
  );
}

export default App;
