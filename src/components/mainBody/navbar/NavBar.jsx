import './navBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="left">
                Nigga_Talks
            </div>
            <div className="right">
                <img src="./grid.png" alt="" />
                <button>Try to be Nigga Advanced</button>
                {/* <img src="./boy.png" alt="" className='avatar' /> */}
            </div>
        </div>
    )
}

export default NavBar