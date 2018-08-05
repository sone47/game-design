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

  async init(canvas, options) {
    const { width, height, backgroundColor, images } = options;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    this.context = context;

    this.drawBackground(backgroundColor);
    await this.loadResource(images);
  };

  drawBackground(color) {
    const context = this.context;
    context.fillStyle = color;
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
};