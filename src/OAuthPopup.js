import { useSearchParams } from "react-router-dom";

function OAuthPopup(){
  const [queryParameters] = useSearchParams();
  const oauthCode = queryParameters.get("code");
  window.opener.postMessage({
    type: 'oauth-code',
    oauthCode: oauthCode
  })

  return(
    <div style={{ margin: '12px' }} data-testid="popup-loading">
      Loading...
    </div>
  )
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

export {OAuthPopup, closePopup, openPopup};