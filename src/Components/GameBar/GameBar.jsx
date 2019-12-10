import React from 'react';
import "./GameBar.scss";
import logo from "../logo_concept.png";
import Player from "../Player/Player";

const GameBar = (playerList) => {
    return (
        <div className="gameBarContainer">
            <div className="darkOverlay"></div>
            <div className="enemyContainer" />
            <div className="titleContainer">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="partyContainer">
                <div className="partyArea">
                    <Player 
                        playerList={playerList}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameBar
