import "./card.css";
import { createCard, createRandomCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getRandomCat } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

// Static Cat Image
export const staticCatImage = () => {
  return createCard({
    imgSrc: "https://purr.objects-us-east-1.dream.io/i/20161108_141410.jpg",
  });
};

// API Cat Image
export const apiCatImage = (args, { loaded: { catImage } }) => {
  return createCard(catImage);
};

apiCatImage.loaders = [
  async () => ({
    catImage: await getRandomCat(),
  }),
];

// Show Random Container story
export const randomAPICat = () => {
  const randomButton = createElement("button", {
    className: "btn",
    innerText: "Load random cat",
    onclick: async () => {
      const randCat = await getRandomCat();
      // console.log(randCat.imgSrc);
      const randCatCard = createRandomCard(randCat);
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      container.append(randCatCard);
    },
  });
  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });

  return container;
};
