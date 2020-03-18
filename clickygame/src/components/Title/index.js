import React from "react";
import "./style.css";

function Title(props) {
    return(
      <div className="jumbotron">
        <h1>MARVEL CLICKY GAME</h1>
        <br></ br>
        <p>Click and Image To Get Started</p>
        <p>{props.children}</p>
      </div>
    );
}

export default Title;