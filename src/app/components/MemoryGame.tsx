"use client";

import { useState, useEffect, createElement } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPrisma,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";

// Define the card type
type Card = {
  id: number;
  tech: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Shadcn", icon: SiShadcnui },
  { name: "Prisma", icon: SiPrisma },
  { name: "Motion", icon: SiFramer },
];

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [gameComplete, setGameComplete] = useState<boolean>(false);

  // Initialize the game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Create pairs of cards
    const cardPairs = [...technologies, ...technologies].map((tech, index) => ({
      id: index,
      tech: tech.name,
      isFlipped: false,
      isMatched: false,
    }));

    // Shuffle the cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setGameComplete(false);
  };

  const handleCardClick = (id: number) => {
    // Prevent clicking if already checking a pair or card is already flipped/matched
    if (
      isChecking ||
      flippedCards.includes(id) ||
      cards.find((card) => card.id === id)?.isMatched
    ) {
      return;
    }

    // Flip the card
    const newCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    // Check if we have a pair
    if (newFlippedCards.length === 2) {
      setIsChecking(true);

      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards.find((card) => card.id === firstId);
      const secondCard = newCards.find((card) => card.id === secondId);

      if (firstCard?.tech === secondCard?.tech) {
        // Match found
        setTimeout(() => {
          const matchedCards = newCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card
          );
          setCards(matchedCards);
          setFlippedCards([]);
          setMatchedPairs(matchedPairs + 1);
          setIsChecking(false);

          // Check if game is complete
          if (matchedPairs + 1 === technologies.length) {
            setGameComplete(true);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = newCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isFlipped: false }
              : card
          );
          setCards(resetCards);
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const getCardIcon = (techName: string) => {
    const tech = technologies.find((t) => t.name === techName);
    return tech?.icon || SiNextdotjs;
  };

  return (
    <div className=" flex flex-col items-center p-2">
      <h2 className="text-3xl  mb-2 text-white">Tech I use</h2>

      {gameComplete ? (
        <div className="text-center mb-2">
          <p className="text-green-400 text-lg mb-1">Game Complete! 🎉</p>
          <button
            onClick={initializeGame}
            className="px-3 py-1 bg-[#4d5cce] text-white rounded-md hover:bg-[#3a46a0] transition-colors text-sm"
          >
            Play Again
          </button>
        </div>
      ) : (
        <p className="text-white mb-2 text-sm">
          Matched: {matchedPairs} / {technologies.length}
        </p>
      )}

      <div className="grid grid-cols-4 gap-2 w-full max-w-xs pt-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`aspect-square rounded-lg cursor-pointer ${
              card.isMatched ? "pointer-events-none" : ""
            }`}
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`w-full h-full rounded-lg transition-transform duration-500 transform-gpu ${
                card.isFlipped || card.isMatched ? "rotate-y-180" : ""
              } relative shadow-lg`}
            >
              {/* Card Back */}
              <div
                className={`absolute w-full h-full rounded-lg bg-[#011627] border-2 border-[#43d9ad] flex items-center justify-center ${
                  card.isFlipped || card.isMatched ? "opacity-0" : "opacity-100"
                } transition-opacity duration-500 shadow-[0_0_15px_rgba(67,217,173,0.5)] overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#43d9ad]/20 via-[#43d9ad]/10 to-[#43d9ad]/20 animate-gradient-x"></div>
              </div>

              {/* Card Front */}
              <div
                className={`absolute w-full h-full rounded-lg bg-gradient-to-br from-[#011627] to-[#01111d] border ${
                  card.isMatched ? "border-green-400" : "border-[#2a3f58]"
                } flex items-center justify-center ${
                  card.isFlipped || card.isMatched ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 shadow-inner ${
                  card.isMatched ? "bg-opacity-90" : ""
                }`}
              >
                {createElement(getCardIcon(card.tech), {
                  size: 28,
                  className: `text-white ${
                    card.isMatched ? "text-green-400" : ""
                  }`,
                  title: card.tech,
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
