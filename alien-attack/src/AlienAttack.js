class AlienAttack extends Game {
  constructor(canvas, options) {
    super(canvas, options);
    this.init(options);
  }

  init(options) {
    const { width, height } = options;
    const ctx = this.context;
    this.loadResource(this.images).then(() => {
      this.ufo = new EImage(ctx, {
        image: this.gameImages['ufo.png'],
        width: 100,
        height: 100,
        x: (width - 100) / 2,
        y: 100
      });
      this.aircraft = new EImage(ctx, {
        image: this.gameImages['aircraft.png'],
        width: 100,
        height: 100,
        x: (width - 100) / 2,
        y: height - 200
      });
      this.earth = new Circle(ctx, {
        radius: width / 2,
        x: width / 2,
        y: height + width / 8,
        fill: 'transparent'
      });

      this.render();
    });
  }

  render() {
    this.clear();
    this.drawBackground();
    this.earth.render();
    this.ufo.render();
    this.aircraft.render();
  }
}