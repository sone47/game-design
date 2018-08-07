class EImage extends Element {
  render() {
    const { image, x, y, width, height } = this.attrs;
    this.context.drawImage(image, x, y, width, height);
  }
}