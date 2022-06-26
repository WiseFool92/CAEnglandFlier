// import logo from './logo.svg';
import './App.css';
import redWaterLotus from './img/redWaterLotus.webp';
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
      <h1>Ann Watkins</h1>
      </header>
      <div className='jumbotron section' style={parallaxHome}>

      </div>
      <h1>Conscious Anatomy Flier</h1>
    </div>
  );
}

export default App;
