import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const staticCatImage = () => {
  return createCard({
    imgSrc: "https://purr.objects-us-east-1.dream.io/i/20170304_114348.jpg",
  });
};
