# react-images-preloader

HOC to preload images before they will be actually rendered

[DEMO](http://jsbin.com/yorure/7/edit?js,output)

## Installation
```
npm i -D react-images-preloader
```

## Usage
```jsx
import preloadImages from 'react-images-preloader';

const App = ({ img1, img2 }) => (
  <div>
    <p>These images are already preloaded</p>
    <img src={img1} width={100} />
    <img src={img2} width={140} />
  </div>
);

const AppContainer = preloadImages({
  img1: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
  img2: 'https://pixabay.com/static/uploads/photo/2016/05/12/20/58/water-lilies-1388690_960_720.jpg'
})(App);
```

## API

**preloadImages(config&lt;Object&gt;, component&lt;React.Component&gt;)**

Calling `preloadImages` will initiate preloading immediately and pass specified images down to wrapped component via pros. So later when a component will render, images will be already cached by browser.

MIT
