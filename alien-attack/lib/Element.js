class Element {
  constructor(context, attrs) {
    this.context = context;

    const defaultAttrs = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      fill: 'transparent',
      stroke: '#000',
      strokeWidth: 1,
      text: '',
      fontSize: 12,
      fontFamily: 'Comic Sans MS',
      textAlign: 'left'
    };
    this.attrs = Object.assign({}, defaultAttrs, attrs);
  }

  setAttrs(props) {
    this.attrs = Object.assign({}, this.attrs, props);
    return this;
  }
};