import React, { useEffect, useState } from "react";
import Script from "next/script";

const baseUrl = "https://widgets.cryptocompare.com/";
const appName = "Red Fog";

// Define the function outside the component
const loadCryptoCompareWidgetScript = () => {
  const existingScript = document.getElementById("cryptoCompareScript");
  if (existingScript) {
    existingScript.remove(); // Remove the existing script
  }

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  var theUrl = baseUrl + "serve/v3/coin/chart?fsym=BTC&tsyms=USD";
  s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
  s.id = "cryptoCompareScript"; // Set the script id
  document.getElementById("cryptoCompareWidgetContainer").appendChild(s);
};

const CryptoCompareWidget: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Load the script when the component mounts
    loadCryptoCompareWidgetScript();
    setActive(true);

    // Clean up when the component unmounts
    return () => {
      const existingScript = document.getElementById("cryptoCompareScript");
      if (existingScript) {
        existingScript.remove(); // Remove the script when unmounting
      }
    };
  }, []);

  useEffect(() => {
    // Load the script whenever the "active" state changes
    if (active) {
      loadCryptoCompareWidgetScript();
    }
  }, [active]);

  return (
    <div>
      {/* Other content */}
      <div id="cryptoCompareWidgetContainer">
        {/* The <Script> component should be placed here */}
        <Script id="cryptoCompareScript" strategy="lazyOnload">
          {`
            // This script is loaded via Next.js Script component
            // It will be executed after it's loaded
            var baseUrl = "${baseUrl}";
            var appName = "${appName}";
            (function() {
              var s = document.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              var theUrl = baseUrl + 'serve/v3/coin/chart?fsym=BTC&tsyms=USD';
              s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
              document.getElementById("cryptoCompareWidgetContainer").appendChild(s);
            })();
          `}
        </Script>
      </div>
    </div>
  );
};

export default CryptoCompareWidget;
