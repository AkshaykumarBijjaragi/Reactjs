import React from "react";
import ReactDOM from "react-dom/client";
// import Colorgenerator from "./src/components/Random color generator/RandomColorGenerator";
// import StarRatings from "./src/components/StarRating/StarRatings"
// import ImageSlider from "./src/components/Image slider/ImageSlider"
// import Accordion from "./src/components/Accordion/Accordion";
// import Loadmore from "./src/components/LoadMoreProducts/Loadmore";
import TreeMenu from "./src/components/Treemenu/TreeMenu";
import menus from "./src/components/Treemenu/data"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TreeMenu menus={menus}/>);
