import { useContext } from "react";
import Comp4 from "./Comp4";
import { PlayerContext } from "../App";

const Comp3 = () => {
  const contextPlayer = useContext(PlayerContext);

  return (
    <div>
      <Comp4 />
      <h1>Name: {contextPlayer.name}</h1>
      <h2>Age: {contextPlayer.age}</h2>
    </div>
  );
};

export default Comp3;
