export const optimizeImage = (image) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0, image.width, image.height);
  return canvas.toDataURL('image/jpeg', 0.1);
};