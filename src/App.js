import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { closePopup, OAuthPopup } from "./OAuthPopup";
import { Login } from "./Login";
import { Header } from "./Header";
import BlueprintList from "./BlueprintList";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

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
  const popupRef = useRef();
  const [token, setToken] = useState(null);

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    async function handleMessage(message) {

      if (message.origin !== process.env.REACT_APP_BASE_ORIGIN) {  // prevent CSRF
        return;
      }

      if (message?.data?.type !== "oauth-code") {
        return;
      }

      closePopup(popupRef);

      const get_token_url = `${process.env.REACT_APP_BASE_API_URL}/auth/token`
      const params = { params: { code: message?.data?.oauthCode } }
      try {
        const response = await axios.get(get_token_url, params);
        if (response.data !== '') {
          console.log("setting token", response.data)
          setToken(response.data);
          localStorage.setItem("token", response.data);
        }
      }
      catch (err) {
        console.log(err);
        throw err
      }
    }
  }, [])

  return (
    <div className="App">
      <Header token={token} />
      <Login popupRef={popupRef}/>
      <BlueprintList />
    </div>
  );
}

export default App;
