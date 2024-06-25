import MainBody from "./components/mainBody/MainBody";
import SideMenu from "./components/sideMenu/SideMenu";
import "./index.css"

const App =  () =>{
  return(
    <div className="main-view">
      <SideMenu />
      <MainBody />
    </div>
  )
}

export default App;