class AlienAttack extends Game {
  constructor(canvas, options) {
    super(canvas, options);
  }

  async init(canvas, options) {
    await super.init(canvas, options);

    const { width, height } = options;
    this.drawAlien({
      width: 100,
      height: 100,
      x: (width - 100) / 2,
      y: 250
    });
    this.drawAircraft({
      width: 100,
      height: 100,
      x: (width - 100) / 2,
      y: height - 200
    });
  }

  drawAlien(attrs) {
    const { width, height, x, y } = attrs;
    const ctx = this.context;
    ctx.drawImage(this.gameImages['ufo.png'], x, y, width, height);
  }

  drawAircraft(attrs) {
    const { width, height, x, y } = attrs;
    const ctx = this.context;
    ctx.drawImage(this.gameImages['aircraft.png'], x, y, width, height);
  }
}