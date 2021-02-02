interface FontsInterface {
  black: FontInterface;
  blackItalic: FontInterface;
  bold: FontInterface;
  boldItalic: FontInterface;
  heavy: FontInterface;
  heavyItalic: FontInterface;
  light: FontInterface;
  lightItalic: FontInterface;
  medium: FontInterface;
  mediumItalic: FontInterface;
  regular: FontInterface;
  regularItalic: FontInterface;
  semiBold: FontInterface;
  semiBoldItalic: FontInterface;
  thin: FontInterface;
  thinItalic: FontInterface;
  ultraLight: FontInterface;
  ultraLightItalic: FontInterface;
}

interface FontInterface {
  fontFamily: string;
  fontWeight: string;
}

export default FontsInterface;
