import React from "react";

function NotFoundPage() {
  const url = window.location;
  console.log(url)
  return (
    <div style={{ padding: "50px", width: "100%", textAlign: "center" }}>
      The page <code>{url.pathname}</code> could not be found.
    </div>
  );
}

export default NotFoundPage;
