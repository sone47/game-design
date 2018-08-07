class EImage {
  constructor(context, attrs) {
    this.context = context;
    this.attrs = attrs;
  }

  setAttrs(props) {
    return this;
  }

  render() {
    const { image, x, y, width, height } = this.attrs;
    this.context.drawImage(image, x, y, width, height);
  }
}