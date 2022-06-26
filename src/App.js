// import logo from './logo.svg';
import "./App.css";
import redWaterLotus from "./img/redWaterLotus.webp";
import whiteLotus3 from "./img/whiteLotus3.jpeg";
// import Ann from './img/ann.jpg';
// import annLogo from './img/annLogo.jpg';
import newHarmonyHeader from "./img/newHarmonyHeader.jpg";

// const homeBackground = {
//   backgroundColor: "#37659D",
// };
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
          <h1>Course Dates and Information</h1>
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
                        Registration
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
                        Registration
                      </a>{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 p-3">
            <h3>Course Offerings</h3>
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
                        Registration
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
                        Registration
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
                        Registration
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
          <h1>Accommodations</h1>
          <hr />
          <div className="col-md-6">
            <h2>Woodland yurt</h2>
            <a href="https://www.airbnb.co.uk/rooms/50341439">
              https://www.airbnb.co.uk/rooms/50341439
            </a>
            <p>
              Yurt stay is dorm-style for $40.00 per night plus a one-time
              weekly charge of $35.00 for bedding and cleaning with a shared
              outdoor bathroom, shower, sink, fire pit
            </p>
          </div>
          <div className="col-md-6">
            <h2>Rose Chalet</h2>

            <a href="https://www.airbnb.co.uk/rooms/50051591">
              https://www.airbnb.co.uk/rooms/50051591
            </a>
            <p>
              The chalet includes bedding, an indoor bathroom, and a kitchen and
              is located on campus for a charge of $90.00 per room per night
              with a one-time weekly charge of $60.00 for cleaning
            </p>
          </div>
        </div>
        <div className="row">
          <h2>Flats</h2>
          <p>
            2 Flats include bedding, indoor bathroom, and kitchen; you will need
            a car or taxi and bus because they are located about 15min. away
            from campus; the cost per bedroom per night is $90.00 plus a
            one-time weekly charge of $60.00 for cleaning
          </p>
          <div className="col-md-6">
            <h2>Falmouth Flat</h2>

            <a href="https://www.airbnb.co.uk/rooms/13130762">
              https://www.airbnb.co.uk/rooms/13130762
            </a>
          </div>
          <div className="col-md-6">
            <h2>Penryn Flat</h2>

            <a href="https://www.airbnb.co.uk/rooms/50915835">
              https://www.airbnb.co.uk/rooms/50915835
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
