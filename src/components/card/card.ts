import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc }) {
  return createElement("div", {
    className: "container",
    childs: [
      createElement("h2", {
        innerText: "A random cat",
      }),
      createElement("img", {
        className: "catImage",
        src: imgSrc,
      }),
    ],
  });
}

export function createRandomCard({ imgSrc }) {
  return createElement("div", {
    className: "container",
    childs: [
      createElement("img", {
        className: "catImage",
        src: imgSrc,
      }),
    ],
  });
}
