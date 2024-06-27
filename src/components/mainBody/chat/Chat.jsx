import './chat.css';

const Chat = () => {
    return (
        <div className="container">
            <div className="chat">
                <div className="message own">
                    <img src="./boy.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./boy.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <img src="./boy.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./boy.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <img src="./boy.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <input type="text" placeholder='Send a message to your nigga...' />
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat;