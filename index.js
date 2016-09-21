import React from 'react';

const preloadImages = (config) => (Component) => {
  Object.values(config)
    .forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  return (props) => <Component {...props} {...config} />;
}

export default preloadImages;
