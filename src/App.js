import logo from "./logo.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAuthPopup from "./OAuthPopup";
import { useRef } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/callback" element={<OAuthPopup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Cosmoteer Ships
        <br />
        Coming soon !
      </p>
    </header>
  );
}

const POPUP_HEIGHT = 700;
const POPUP_WIDTH = 600;

const openPopup = (url) => {
  const top = window.outerHeight / 2 + window.screenY - POPUP_HEIGHT / 2;
  const left = window.outerWidth / 2 + window.screenX - POPUP_WIDTH / 2;
  return window.open(
    url,
    "OAuth2 Popup",
    `height=${POPUP_HEIGHT},width=${POPUP_WIDTH},top=${top},left=${left}`
  );
};

const closePopup = (popupRef) => {
  popupRef.current?.close();
};


function Body() {
  const popupRef = useRef();

  window.addEventListener("message", handleMessage);
  function handleMessage(message) {

    if (message.origin !== "http://localhost:3005") {  // prevent CSRF
      return;
    }

    const message_type = message?.data?.type
    if (message_type !== "oauth-code") {
      return
    }
    closePopup(popupRef)

  }

  return (
    <div className="Body">
      <button className="button" type="button"
              onClick={() => popupRef.current = openPopup("https://discord.com/api/oauth2/authorize?client_id=1041459238318379068&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2Fcallback&response_type=code&scope=identify")}>
        Login with discord
      </button>
      {/*</a>*/}
    </div>
  );
}

export default App;
