import { useState } from "react";
import "./Accordion.css";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multi, setMulti] = useState(false);
  const [multiItem, setMultiItem] = useState([]);

  function handleSingle(id) {
    selected === id ? setSelected(null) : setSelected(id);
  }

  function handleMulti(id) {
    if (multiItem.includes(id)) {
      const newArr = multiItem.filter((item) => item !== id);
      setMultiItem(multiItem.filter((item) => item !== id));
    } else {
      setMultiItem((prevItems) => [...prevItems, id]);
    }
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setMulti(!multi);
          setSelected(null)
          setMultiItem([]);
        }}
      >
        {multi ? "disable multi selection" : "enable multi selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="accordion-item"
                onClick={() =>
                  multi ? handleMulti(item.id) : handleSingle(item.id)
                }
              >
                <div className="acc-title">
                  <h3>{item.question}</h3>
                  <span>
                    {selected === item.id || multiItem.includes(item.id)
                      ? "-"
                      : "+"}
                  </span>
                </div>
                {(multi && multiItem.includes(item.id)) ||
                selected === item.id ? (
                  <div className="acc-answer">{item.answer}</div>
                ) : null}
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
