import { useState } from "react";
import "./index.css";

export default function RandomColorGenerator() {
  const [selectedColorFormat, setSelectedColorFormat] = useState("hex");

  const [color, setColor] = useState(null);

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function createHexColor() {
    let randomColor = "#";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    for (let index = 0; index < 6; index++) {
      randomColor += arr[generateRandomNumber(arr.length)];
    }
    setColor(randomColor);
  }
  function createRGBColor() {
    let randomColor = `RGB(${generateRandomNumber(256)}, ${generateRandomNumber(
      256
    )}, ${generateRandomNumber(256)})`;
    setColor(randomColor);
    return randomColor;
  }

  function copyColor() {
    if (color) {
      navigator.clipboard
        .writeText(color)
        .then(alert("Color copied to clipboard"));
    }
  }

  return (
    <div className="container">
      <button className="button" onClick={createHexColor}>
        Generate Hex color
      </button>
      <button className="button" onClick={createRGBColor}>
        Generate RGB color
      </button>
      <button className="button" onClick={copyColor}>
        Copy to clipboard
      </button>
      <div className="color-display" style={{ backgroundColor: `${color}` }}>
        {color && `color genearated is :${color}`}
      </div>
    </div>
  );
}
