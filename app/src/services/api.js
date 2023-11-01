import axios from 'axios';
import { optimizeImage } from '../utils/optimization';

export const uploadImage = async (file) => {
  const formData = new FormData();
  const image = new Image();
  image.src = URL.createObjectURL(file);
  image.onload = () => URL.revokeObjectURL(image.src);
  const optimizedImage = optimizeImage(image);
  formData.append('image', optimizedImage);
  const response = await axios.post('/upload', formData);
  return response.data;
};