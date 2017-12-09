import paintingsData from '../data/paintings.json';

export const allPaintings = () => Promise.resolve(paintingsData);

export const randomPainting = () =>
  Promise.resolve(paintingsData[Math.floor(Math.random() * paintingsData.length)]);

export const paintingsForPainter = painter =>
  Promise.resolve(paintingsData.filter(painting => painting.painter === painter));

export const paintings = (painter) => {
  if (painter) {
    return paintingsForPainter(painter);
  }
  return allPaintings();
};
