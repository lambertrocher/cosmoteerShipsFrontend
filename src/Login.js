import { useRef } from "react";
import { closePopup, openPopup } from "./OAuthPopup";

export function Login() {
  const popupRef = useRef();

  window.addEventListener("message", handleMessage);

  function handleMessage(message) {

    if (message.origin !== "http://localhost:3005") {  // prevent CSRF
      return;
    }

    const message_type = message?.data?.type;
    if (message_type !== "oauth-code") {
      return;
    }
    closePopup(popupRef);

  }

  return (
    <div className="Login">
      <button className="button" type="button"
              onClick={() => popupRef.current = openPopup("https://discord.com/api/oauth2/authorize?client_id=1041459238318379068&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2Fcallback&response_type=code&scope=identify")}>
        Login with discord
      </button>
      {/*</a>*/}
    </div>
  );
}