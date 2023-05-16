import "./App.css";

//Import Components
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";

//Import Data
import playerData from "./data/playerData";
import matchData from "./data/matchData"

//Import Helpers
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";


//Declare App component
function App() {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData}/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
