import React from 'react';
import About from './components/About';

const info = [
  {
    title: "Our Story",
    content: "lorem ipsum"
  },
  {
    title: "Our Meats",
    content: "Grassfed and full of flavor"
  },
  {
    title: "Our Location",
    content: "655 Blue Hill Ave, Boston MA"
  },
];

const App =  () => {
  return (
    <h1>
      <About info={info} />
  </h1>
);
};

export default App;
