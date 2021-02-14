import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc }) {
  return createElement("img", {
    className: "catImage",
    src: imgSrc,
  });
}
