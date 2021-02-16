export async function getRandomCat() {
  const response = await fetch("https://aws.random.cat/meow");
  const result = await response.json();
  return {
    imgSrc: result.file,
  };
}
