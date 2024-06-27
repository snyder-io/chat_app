import { useState } from 'react';
import './chat.css';

const Chat = () => {

    const [user, setUser] = useState('Demo_Name');
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        const c = [...chats];
        c.push({ user, message: message });
        setChats(c);
        setMessage('');
    }
    const keyDown =(event)=>{
        if(event.key ==='Enter'){
            event.preventDefault();
            sendMessage();
        }
    }

    const [chats, setChats] = useState([
        {
            user: 'Shiwam',
            message: 'Nigga',
        },
        {
            user: 'Demo_Name',
            message: 'Hello',
        }
    ]);

    return (
        <div className="container">
            <div className="chat">


                {chats.map(c =>
                    <div className={`message ${c.user === user ? 'own' : ''}`}>
                        <img src="./boy.png" alt="" />
                        <div className="texts">
                            <h4>{c.user}</h4>
                            <p>{c.message}</p>
                            <span>1 min ago</span>
                        </div>
                    </div>
                )}

            </div>
            <div className="bottom">
                <input type="text" placeholder='Send a message to your nigga...' onInput={e => setMessage(e.target.value)} onKeyDown={keyDown} value={message} />
                <button className='sendButton' onClick={e => sendMessage()}>Send</button>
            </div>
        </div>
    )
}

export default Chat;