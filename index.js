import React from "react";
import ReactDOM from "react-dom/client";
import Accordian from "./src/components/Accordian/Accordian";

const hello = <h1>hello from react</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Accordian />);
