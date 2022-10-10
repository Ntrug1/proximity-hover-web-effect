// import logo from "./logo.svg";
import "./App.css";
import eye from "./eye.png";
import mainImage from "./pickle_rick.png";

function App() {
  return (
    <div className="image-wrapper">
      <img width="800px" height="700px" alt="rick-and-morty" src={mainImage} />
      <div className="eyes">
        <img alt="eye" src={eye} />
        <img alt="eye" src={eye} />
        <img alt="eye" src={eye} />
        <img alt="eye" src={eye} />
      </div>
    </div>
  );
}

export default App;
