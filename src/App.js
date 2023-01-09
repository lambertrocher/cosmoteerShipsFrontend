import logo from "./logo.png";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
      const redirectUrl = 'https://discord.com/api/oauth2/authorize?client_id=1041459238318379068&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fblueprints%2Flogin&response_type=code&scope=identify%20email';
      window.location.href = redirectUrl;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cosmoteer Ships
          <br/>
          Coming soon !
        </p>
      </header>
      <div className="Body">
        <button className="button" type="button">
          Login with discord
        </button>
      </div>
    </div>
  );
}

export default App;
