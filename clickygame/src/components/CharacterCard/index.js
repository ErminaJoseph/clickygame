import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className = "container">
            <div className = "card">
                <div className = "img-container">
                    <img src={props.image} onClick={() => props.calculateScore(props.id)}></img>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;