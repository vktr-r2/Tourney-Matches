import React from "react";
import Player from "./Player";


import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  console.log("Props: ", props);
  const playerDataArray = preparePlayerData(props.playerData);
  console.log("playerDataArray: ", playerDataArray);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, props.matchData);

  const onePlayer = parsedPlayerData[0];

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player
        gamerTag={onePlayer.gamerTag}
        firstName={onePlayer.firstName}
        lastName={onePlayer.lastName}
        wins={onePlayer.wins}
      />
    </section>
  );
}

export default PlayerList;
