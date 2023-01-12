import logo from "./logo.png";

export function Header(props) {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Cosmoteer Ships
        <br />
        Coming soon !
        <br />
        Token : {props.token}
      </p>
    </header>
  );
}