import { useState } from "react";
// import "./Accordion.css";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function openAccordion(id) {
    selected === id ? setSelected(null) : setSelected(id);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="accordion-item"
                onClick={() => openAccordion(item.id)}
              >
                <div className="acc-title">
                  <h3>{item.question}</h3>
                  <span>{selected === item.id ? "-" : "+"}</span>
                </div>
                {selected === item.id && (
                  <div className="acc-answer">{item.answer}</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
