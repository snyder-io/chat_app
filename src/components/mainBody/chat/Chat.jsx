import './chat.css';

const Chat = () => {
    return (
        <div className="container">
            <div className="chat">

            </div>
            <div className="bottom">
                <input type="text" placeholder='Send a message to your nigga...' />
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat;