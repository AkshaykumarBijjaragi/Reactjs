import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./src/components/Accordion/Accordion";

const hello = <h1>hello from react</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Accordion />);
