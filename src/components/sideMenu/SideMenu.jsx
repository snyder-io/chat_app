import './sideMenu.css';

const SideMenu = () => {
    return (
        <div className="sideMenu">
            <div className="up">
                <img src="./menu.png" alt="" />
                <img src="./plus.png" className='plus' alt="" />
            </div>
            <div className="down">
                <img src="./help.png" alt="" />
                <img src="./activity.png" alt="" />
                <img src="./setting.png" alt="" />
                <div className="user">
                    <img src="./boy.png" alt="" className='avatar' />
                </div>
            </div>

        </div>
    )
}

export default SideMenu;