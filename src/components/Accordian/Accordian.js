import "./Accordian.css";
import data from "./data";

export default function Accordian() {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div key={item.id}>
              <h2>{item.question}</h2>
              <h4>{item.answer}</h4>
            </div>
          </>
        );
      })}
    </>
  );
}
