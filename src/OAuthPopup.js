import { useSearchParams } from "react-router-dom";

function OAuthPopup(){
  const [queryParameters] = useSearchParams();
  const oauthCode = queryParameters.get("code");
  window.opener.postMessage({
    type: 'oauth-code',
    oauthCode
  })

  return(
    <div style={{ margin: '12px' }} data-testid="popup-loading">
      Loading...
    </div>
  )
}

export default OAuthPopup;