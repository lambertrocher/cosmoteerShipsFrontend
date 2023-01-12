import { openPopup } from "./OAuthPopup";

export function Login(props) {
  return (
    <div className="Login">
      <button className="button" type="button"
              onClick={() => props.popupRef.current = openPopup(process.env.REACT_APP_OAUTH_URL)}>
        Login with discord
      </button>
    </div>
  );
}
