import MenuItem from "./menuItem";

export default function Menulist({list = []}) {
  return <ul className="menu-list-container">

    {list && list.length && list.map((liItem, index ) => <MenuItem key={index} item={liItem}/>)}
  </ul>;
}
