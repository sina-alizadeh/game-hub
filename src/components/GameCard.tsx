import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { FC } from "react";
interface IProps {
  game: Game;
}

const GameCard: FC<IProps> = ({ game }) => {
  return (
    <Card boxShadow="">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent="space-between">
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
