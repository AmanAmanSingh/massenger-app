import './App.css';
import ChatContainerRightSideBar from './components/chatSide/ChatSide';
import ContactChat from './components/contactSide/contactSide';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleAd from './components/googleAdd';

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ width: "20vw", marginRight: "20px" }}>
        <ContactChat />
      </div>
      <div style={{ width: "60vw" }}>
        <ChatContainerRightSideBar />
      </div>
      <div style={{ width: "15vw", marginLeft: "20px", marginTop: "30px" }}>
        <GoogleAd />
      </div>
    </div >
  );
}

export default App;
