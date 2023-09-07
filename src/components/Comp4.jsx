import { PlayerContext } from "../App";

const Comp4 = () => {
  return (
    <div>
      <PlayerContext.Consumer>
        {(player) => {
          return (
            <div>
              <h1>Name: {player.name}</h1>
              <h2>Age: {player.age}</h2>
            </div>
          );
        }}
      </PlayerContext.Consumer>
    </div>
  );
};

export default Comp4;
