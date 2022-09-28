import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Footer() {
  // Get the history object
  const history = useHistory();
  const goBack = () => {
    // imperatively redirect back
    history.goBack();
  };

  const goForward = () => {
    // imperatively redirect forward
    history.goForward();
  };

  return (
    <footer>
      <button onClick={goBack}>رجعت به عقب</button>
      <button onClick={goForward}>تقدم به جلو</button>
    </footer>
  );
}
