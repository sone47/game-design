class Text extends Element {
  render() {
    const { text, x, y, fill, stroke, fontFamily, fontSize, textAlign } = this.attrs;
    const ctx = this.context;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = textAlign;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }
};