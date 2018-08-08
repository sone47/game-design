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
        radius: 400,
        x: width / 2,
        y: height + 200,
        fill: 'transparent'
      });
      this.bullet = new Circle(ctx, {
        radius: 8,
        fill: 'rgb(24, 144, 255)'
      });

      this.listenEvent();

      this.render();
    });
  }

  listenEvent() {
    window.addEventListener('keydown', e => {
      const offset = 12;
      switch(e.keyCode) {
        case 32:
          this.fire();
          break;
        case 37:
          this.moveX(-offset);
          break;
        case 39:
          this.moveX(offset);
          break;
      }
      this.render();
    });
  }

  moveX(offset = 1) {
    const x = this.aircraft.attrs.x + offset;
    this.aircraft.setAttrs({ x });
  }

  fire() {
    this.bullet.setAttrs({
      x: this.aircraft.attrs.x + this.aircraft.attrs.width / 2,
      y: this.ufo.attrs.y + this.ufo.attrs.height / 2
    });
  }

  render() {
    this.clear();
    this.drawBackground();
    this.earth.render();
    this.ufo.render();
    this.aircraft.render();
    this.bullet.render();
  }
}