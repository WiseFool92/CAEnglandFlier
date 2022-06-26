// import logo from './logo.svg';
import "./App.css";
import redWaterLotus from "./img/redWaterLotus.webp";
// import Ann from './img/ann.jpg';
// import annLogo from './img/annLogo.jpg';
// import newHarmonyHeader from './img/newHarmonyHeader.jpg';

// const homeBackground = {
//   backgroundColor: "#37659D",
// };
const parallaxHome = {
  backgroundImage: `url(${redWaterLotus})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conscious Anatomy England</h1>
        <p>Taught by: Ann Watkins</p>
        <p>↓↓ Scroll Down for Details ↓↓</p>
      </header>
      <div className="jumbotron section" style={parallaxHome}></div>

      <h1>Conscious Anatomy Flier</h1>
      <div className="container p-1">
        <div className="row">
          <h1>Accommodations</h1>
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
    </div>
  );
}

export default App;
