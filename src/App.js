import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OAuthPopup } from "./OAuthPopup";
import { Login } from "./Login";
import { Header } from "./Header";

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
      <Login />
    </div>
  );
}

export default App;
