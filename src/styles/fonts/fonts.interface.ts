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
  fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
}

export default FontsInterface;
