import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useReducer } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameQueryContext from "./contexts/gameQueryContext";
import gameQueryReducer from "./reducers/gameQueryReducer";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const initialState: GameQuery = {
    genreId: undefined,
    platformId: undefined,
    sortOrder: "",
    searchText: "",
  };
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [gameQuery, dispatch] = useReducer(gameQueryReducer, initialState);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GameQueryContext.Provider value={{ gameQuery, dispatch }}>
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              dispatch({ type: "searchText", value: searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                dispatch({ type: "genreId", value: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    dispatch({ type: "platformId", value: platform.id })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  dispatch({ type: "sortOrder", value: sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </GameQueryContext.Provider>
    </Grid>
  );
}

export default App;
