class Element {
  constructor(context, attrs) {
    this.context = context;

    const defaultAttrs = {
      fill: 'transparent',
      stroke: '#000',
      strokeWidth: 1
    };
    this.attrs = Object.assign({}, defaultAttrs, attrs);
  }

  setAttrs(props) {
    this.attrs = Object.assign({}, this.attrs, props);
    return this;
  }
};