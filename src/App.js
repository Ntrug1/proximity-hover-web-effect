// import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import mortyEyes from "./morty_eye.png";
import mainImage from "./pickle_rick.png";
import rickEyes from "./rick_eye.png";

function App() {
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx);
    const deg = (rad * 100) / Math.PI;
    return deg;
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    });
  });

  return (
    <div className="image-wrapper">
      <img
        id="anchor"
        width="700px"
        height="600px"
        alt="rick-and-morty"
        src={mainImage}
      />
      <div id="eyes">
        <img
          className="eye"
          width="30px"
          height="30px"
          style={{
            top: "-170px",
            left: "-240px",
            borderRadius: "50%",
            rotate: "20deg",
          }}
          alt="left-rickEye"
          src={rickEyes}
        />
        <img
          className="eye"
          width="30px"
          height="30px"
          style={{ top: "-172px", left: "-190px", borderRadius: "50%" }}
          alt="right-rickEye"
          src={rickEyes}
        />
        <img
          className="eye"
          width="30px"
          height="30px"
          style={{ top: "32px", left: "120px", borderRadius: "50%" }}
          alt="left-mortyEye"
          src={mortyEyes}
        />
        <img
          className="eye"
          width="30px"
          height="30px"
          style={{ top: "58px", left: "185px", borderRadius: "50%" }}
          alt="right-mortyEye"
          src={mortyEyes}
        />
      </div>
    </div>
  );
}

export default App;
