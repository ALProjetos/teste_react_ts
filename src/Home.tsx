import logo from './logo.svg';
 import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Chat from './Chat';

function App() {
    const navigate = useNavigate();
    const [isChat, setChat] = useState(false);
    
   return (
    <div>
        <nav>
        <ul>
            <li><a href="/" onClick={() => setChat(true)}>Chat</a></li>
        </ul>
        </nav>
        {
            isChat
                ? <Chat/>
                : <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                    </header>
                </div>
        }
    </div>
   );
}

export default App;
