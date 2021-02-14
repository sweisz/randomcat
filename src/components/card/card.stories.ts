import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getRandomCat } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

// static images
export const staticCatImage = () => {
  return createCard({
    imgSrc: "https://purr.objects-us-east-1.dream.io/i/20161108_141410.jpg",
  });
};

// import image from API
export const apiCatImage = (args, { loaded: { catImage } }) => {
  return createCard(catImage);
};

apiCatImage.loaders = [
  async () => ({
    catImage: await getRandomCat(),
  }),
];

// show random container witch button and cat
export const randomContainer = () => {
  const randomButton = createElement("button", {
    innerText: "Show another cat.",
    onclick: async () => {},
  });
};
