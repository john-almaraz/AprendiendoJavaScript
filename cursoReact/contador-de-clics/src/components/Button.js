import React from "react";
import '../stylesheets/Button.css'
function Button({text, isButtonClick, manejarClick}){
  return(
    <button
      className={isButtonClick ? 'button-click' : 'button-reset'}
      onClick={manejarClick}
    >
      {text}
    </button>
  );
}

export default Button;