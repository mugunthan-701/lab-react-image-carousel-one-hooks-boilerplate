import React from 'react';
import Carousel from '../components/Carousel'; // Update the path based on your project structure
import faces from '../images/faces.jpg';
import girlface from '../images/girlface.jpg';
import eyes from '../images/eyes.jpg';

export const images = [
  { title: 'Faces', subtitle: 'How many faces do you have?', img: faces },
  {
    title: 'Inside out',
    subtitle: 'The best person to guide you is yourself',
    img: girlface,
  },
  {
    title: 'Crying Lady',
    subtitle: 'Why so serious?',
    img: eyes,
  },
];
