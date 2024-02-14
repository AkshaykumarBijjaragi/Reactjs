import { useState } from "react";
import Menulist from "./Menulist";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function toggleChildren(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
    console.log(displayChildren);
  }

  return (
    <li className="menu-item"  style={{display:"flex"}}>
      <p>
        {item.label}

        {item && item.children && item.children.length ? (
          <span onClick={() => toggleChildren(item.label)}>
            {displayChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </p>
      {item &&
      item.children &&
      item.children.length &&
      displayChildren[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
}
