import { GameQuery } from "../App";

export interface gameQueryAction {
  type: "genreId" | "platformId" | "sortOrder" | "searchText";
  value: number | string;
}

const gameQueryReducer = (
  state: GameQuery,
  action: gameQueryAction
): GameQuery => {
  switch (action.type) {
    case "genreId":
      return { ...state, genreId: action.value as number };
    case "platformId":
      return { ...state, platformId: action.value as number };
    case "sortOrder":
      return { ...state, sortOrder: action.value as string };
    case "searchText":
      return { ...state, searchText: action.value as string };
    default:
      return state;
  }
};

export default gameQueryReducer;
