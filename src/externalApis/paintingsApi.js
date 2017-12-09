import paintingsData from '../data/paintings.json';

const allPaintings = () => Promise.resolve(paintingsData);

const randomPainting = () =>
  Promise.resolve(paintingsData[Math.floor(Math.random() * paintingsData.length)]);

const paintingsByPainter = painter =>
  Promise.resolve(paintingsData.filter(painting => painting.painter === painter));

const paintingByTitle = title =>
  Promise.resolve(paintingsData.find(painting => painting.title === title));

export const painting = (title) => {
  if (title) {
    return paintingByTitle(title);
  }
  return randomPainting();
};

export const paintings = (painter) => {
  if (painter) {
    return paintingsByPainter(painter);
  }
  return allPaintings();
};
