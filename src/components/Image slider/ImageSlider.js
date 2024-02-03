import { useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ numberOfImages = 8 }) {
  const [imageid, setImageID] = useState(0);
  let arrayofPointer = Array.from(
    { length: numberOfImages },
    (_, index) => index + 1
  );
  function handleCircle(pointer) {
    setImageID(pointer);
  }

  function handlePrevious() {
    if (imageid === 1) setImageID(numberOfImages);
    else setImageID((prev) => prev - 1);
    console.log(imageid);
  }
  function handleNext() {
    if (imageid === numberOfImages) setImageID(1);
    else setImageID((prev) => prev + 1);
    console.log(imageid);
  }

  return (
    <div className="container">
      <div className="carasoul-top">
        <button onClick={handlePrevious}> &#8592;</button>
        <div className="image-container">
          <img
            src={`https://picsum.photos/id/${235 + imageid}/536/354`}
            alt=""
          />
        </div>
        <button onClick={handleNext}> &#8594;</button>
      </div>
      <div className="carasoul-pointers">
        {arrayofPointer.map((pointer) => (
          <button
            key={pointer}
            style={{ cursor: "pointer" }}
            onClick={() => handleCircle(pointer)}
            className="circle"
          ></button>
        ))}
      </div>
    </div>
  );
}
