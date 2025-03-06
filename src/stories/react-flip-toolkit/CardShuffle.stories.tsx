import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { shuffle } from "lodash-es";
import React from "react";
import { Flipped, Flipper } from "react-flip-toolkit";

const initialCards = [
  "/images/cards/ace_of_spades.png",
  "/images/cards/2_of_spades.png",
  "/images/cards/3_of_spades.png",
  "/images/cards/4_of_spades.png",
  "/images/cards/5_of_spades.png",
  "/images/cards/6_of_spades.png",
  "/images/cards/7_of_spades.png",
  "/images/cards/8_of_spades.png",
  "/images/cards/9_of_spades.png",
  "/images/cards/10_of_spades.png",
  "/images/cards/jack_of_spades.png",
  "/images/cards/queen_of_spades.png",
  "/images/cards/king_of_spades.png",
  "/images/cards/red_joker.png",
];

const Test: React.FC = () => {
  const [cards, setCards] = React.useState(initialCards);
  const shuffleCards = () => setCards(shuffle(cards));

  return (
    <div className="size-full bg-gray-900 p-10">
      <Button onClick={shuffleCards}>Shuffle Cards!</Button>

      <Flipper
        className="mt-4 flex flex-wrap gap-x-3 gap-y-9"
        flipKey={cards}
        spring={{
          stiffness: 400,
          damping: 30,
        }}
      >
        {cards.map((card) => (
          <Flipped key={card} flipId={card}>
            <img
              className="h-fit max-w-40 rounded-sm bg-white"
              src={card}
              alt="card"
            />
          </Flipped>
        ))}
      </Flipper>
    </div>
  );
};

const meta: Meta<typeof Test> = {
  component: Test,
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Default: Story = {};
