class Game {
  constructor(canvas, options = {}) {
    const defaultOptions = {
      width: 300,
      height: 500,
      backgroundColor: 'transparent',
      images: []
    };
    options = Object.assign({}, defaultOptions, options);
    this.init(canvas, options);
  };

  init(canvas, options) {
    const { width, height, backgroundColor, images } = options;
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    this.canvas = canvas;
    this.context = context;
    this.images = images;
    this.background = backgroundColor;
  };

  drawBackground() {
    const context = this.context;
    context.fillStyle = this.background;
    context.fillRect(0, 0, width, height);
  };

  loadResource(imagesUrls) {
    const imageCount = imagesUrls.length;
    const gameImages = {};
    const imgNamePattern = /([a-z0-9\-]+\.[png|jpg|gif|jpeg]+$)/i;
    let loadCount = 0;
    const loadFun = (image, resolve) => {
      const imageName = imgNamePattern.exec(image.src)[0];
      gameImages[imageName] = image;
      image.onload = null;
      image.onerror = null;
      if(++loadCount >= imageCount) {
        resolve();
      }
    };
    this.gameImages = gameImages;
    
    return new Promise(resolve => {
      imagesUrls.forEach(url => {
        const image = new Image();
        image.src = url;
        image.onload = image.onerror = loadFun.bind(null, image, resolve);
      });
    });
  }

  clear() {
    const canvas = this.canvas;
    const context = this.context;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};