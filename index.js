import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./src/components/Accordion/Accordion";
import Colorgenerator from "./src/components/Random color generator/RandomColorGenerator";

const hello = <h1>hello from react</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Colorgenerator />);
