import React, { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setHidden(true), 1000); // match previous 1s fade
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="spinner" />
    </div>
  );
}
