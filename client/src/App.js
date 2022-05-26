import './App.css';
import { useRef } from "react"
const webSocketHost ="ws://127.0.0.1:11121" 
function App() {
  var outgoingDataInput = useRef(null);
  var incomingDataInput = useRef(null);
  const ws = new WebSocket(webSocketHost);
  ws.onopen = (event) => {
    console.log(`Connected to ${webSocketHost} !`);
  };
  const sendMessage = () => {
    var text = outgoingDataInput.current.value;
    ws.send(text);
    console.log(`Message sent! Content was \"${text}\"`);
  }
  return (
    <div className="App">
      <div className="frame">
        <h3>Simple WebSocket Client</h3>
        <div className="form">
          <input id="" ref={outgoingDataInput}/>
          <input type="submit" onClick={sendMessage}/>
        </div>
        <br/>
        <h3>Incame Message</h3>
        <div className="incoming">
          <textarea readOnly={true} ref={incomingDataInput} type="text" />
        </div>
      </div>
    </div>
  );
}

export default App;
