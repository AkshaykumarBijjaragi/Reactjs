import Menulist from "./Menulist"
// import "./TreeMenu.css"
const TreeMenu = ({menus = []}) => {
  return (
    <div className="tree-view-container">
        <Menulist list={menus}/>
    </div>
  )
}

export default TreeMenu