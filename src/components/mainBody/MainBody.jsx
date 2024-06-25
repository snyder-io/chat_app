import './mainBody.css';
import NavBar from './navbar/NavBar.jsx';
import Chat from './chat/Chat.jsx';

const MainBody = ()=>{
    return(
        <div className="mainBody">
            <NavBar />
            <Chat/>
        </div>
    )
}

export default MainBody