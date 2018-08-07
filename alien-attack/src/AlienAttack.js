class AlienAttack extends Game {
  constructor(canvas, options) {
    super(canvas, options);
  }

  init(canvas, options) {
    super.init(canvas, options);

    const { width, height } = options;
    const ctx = this.context;
    this.loadResource(this.images).then(() => {
      this.ufo = new EImage(ctx, {
        image: this.gameImages['ufo.png'],
        width: 100,
        height: 100,
        x: (width - 100) / 2,
        y: 200
      });
      this.aircraft = new EImage(ctx, {
        image: this.gameImages['aircraft.png'],
        width: 100,
        height: 100,
        x: (width - 100) / 2,
        y: height - 200
      });

      this.render();
    });
  }

  render() {
    this.drawBackground();
    this.ufo.render();
    this.aircraft.render();
  }
}