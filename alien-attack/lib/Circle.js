class Circle extends Element {
  render() {
    const { radius, x, y, fill, stroke } = this.attrs;
    const ctx = this.context;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
};