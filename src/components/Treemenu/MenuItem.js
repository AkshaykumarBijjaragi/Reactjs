import Menulist from "./Menulist";

export default function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <p> {item.label}</p>
      {item && item.children && item.children.length && (
        <Menulist list={item.children} />
      )}
      {console.log("hi")}
    </li>
  );
}
