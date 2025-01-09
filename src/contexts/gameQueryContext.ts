import React from "react";
import { Dispatch } from "react";
import { GameQuery } from "../App";
import { gameQueryAction } from "../reducers/gameQueryReducer";

interface GameQueryContextType {
  gameQuery: GameQuery;
  dispatch: Dispatch<gameQueryAction>;
}

const GameQueryContext = React.createContext<GameQueryContextType>(
  {} as GameQueryContextType
);

export default GameQueryContext;
