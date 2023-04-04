import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { FC } from "react";

interface IProps {
  gameQuery: GameQuery;
}

const GameHeading: FC<IProps> = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
