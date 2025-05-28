import { createApi } from 'unsplash-js';

const HEX_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// All CSS Levels 1-4 named colors
const NAMED_COLORS = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  blue: "#0000FF",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgreen: "#006400",
  darkgrey: "#A9A9A9",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#FF00FF",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  grey: "#808080",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgreen: "#90EE90",
  lightgrey: "#D3D3D3",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#00FF00",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#FF00FF",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#FF0000",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FFFF00",
  yellowgreen: "#9ACD32",
};

class ContrastColor {
  namedColors: { aliceblue: string; antiquewhite: string; aqua: string; aquamarine: string; azure: string; beige: string; bisque: string; black: string; blanchedalmond: string; blue: string; blueviolet: string; brown: string; burlywood: string; cadetblue: string; chartreuse: string; chocolate: string; coral: string; cornflowerblue: string; cornsilk: string; crimson: string; cyan: string; darkblue: string; darkcyan: string; darkgoldenrod: string; darkgray: string; darkgreen: string; darkgrey: string; darkkhaki: string; darkmagenta: string; darkolivegreen: string; darkorange: string; darkorchid: string; darkred: string; darksalmon: string; darkseagreen: string; darkslateblue: string; darkslategray: string; darkslategrey: string; darkturquoise: string; darkviolet: string; deeppink: string; deepskyblue: string; dimgray: string; dimgrey: string; dodgerblue: string; firebrick: string; floralwhite: string; forestgreen: string; fuchsia: string; gainsboro: string; ghostwhite: string; gold: string; goldenrod: string; gray: string; green: string; greenyellow: string; grey: string; honeydew: string; hotpink: string; indianred: string; indigo: string; ivory: string; khaki: string; lavender: string; lavenderblush: string; lawngreen: string; lemonchiffon: string; lightblue: string; lightcoral: string; lightcyan: string; lightgoldenrodyellow: string; lightgray: string; lightgreen: string; lightgrey: string; lightpink: string; lightsalmon: string; lightseagreen: string; lightskyblue: string; lightslategray: string; lightslategrey: string; lightsteelblue: string; lightyellow: string; lime: string; limegreen: string; linen: string; magenta: string; maroon: string; mediumaquamarine: string; mediumblue: string; mediumorchid: string; mediumpurple: string; mediumseagreen: string; mediumslateblue: string; mediumspringgreen: string; mediumturquoise: string; mediumvioletred: string; midnightblue: string; mintcream: string; mistyrose: string; moccasin: string; navajowhite: string; navy: string; oldlace: string; olive: string; olivedrab: string; orange: string; orangered: string; orchid: string; palegoldenrod: string; palegreen: string; paleturquoise: string; palevioletred: string; papayawhip: string; peachpuff: string; peru: string; pink: string; plum: string; powderblue: string; purple: string; rebeccapurple: string; red: string; rosybrown: string; royalblue: string; saddlebrown: string; salmon: string; sandybrown: string; seagreen: string; seashell: string; sienna: string; silver: string; skyblue: string; slateblue: string; slategray: string; slategrey: string; snow: string; springgreen: string; steelblue: string; tan: string; teal: string; thistle: string; tomato: string; turquoise: string; violet: string; wheat: string; white: string; whitesmoke: string; yellow: string; yellowgreen: string; };
  contrastColor: (options?: {}) => any;
  /* istanbul ignore next */
  constructor({
    bgColor = "#FFFFFF",
    fgDarkColor = "#000000",
    fgLightColor = "#FFFFFF",
    defaultColor = "#000000",
    threshold = 128,
    customNamedColors = {},
  } = {}) {
    const defaults = {
      bgColor,
      fgDarkColor,
      fgLightColor,
      defaultColor,
      threshold,
      customNamedColors,
    };
    this.namedColors = { ...NAMED_COLORS, ...customNamedColors };
    this.contrastColor = (options = {}) =>
      contrastColor.call(this, {
        ...defaults,
        ...options,
        customNamedColors: {
          ...defaults.customNamedColors,
          //@ts-expect-error
          ...options.customNamedColors,
        },
      });
  }
}

function contrastColor({
  bgColor = "#FFFFFF",
  fgDarkColor = "#000000",
  fgLightColor = "#FFFFFF",
  defaultColor = "#000000",
  threshold = 128,
  customNamedColors = {},
} = {}) {
  //@ts-expect-error
  this.namedColors = { ...NAMED_COLORS, ...customNamedColors };

  const [
    namedBgColor,
    namedFgDarkColor,
    namedFgLightColor,
    namedDefaultColor,
  ] = [bgColor, fgDarkColor, fgLightColor, defaultColor].map(
    //@ts-expect-error
    (p) => this.namedColors[p]
  );

  let bgColorArray = String(namedBgColor || bgColor)
    .toUpperCase()
    .split("")
    .filter((c) => HEX_CHARS.includes(c));

  switch (bgColorArray.length) {
    case 3:
    case 4:
      // 3 e.g. #FFF
      // 4 e.g. #1234 <- (3hex + alpha-channel)
      bgColorArray = bgColorArray.slice(0, 3).map((c) => `${c}${c}`);
      break;
    case 6:
    case 8:
      // 6 e.g. #789ABC <- ideal
      // 8 e.g. #789ABC00 <- (6hex + alpha-channel)
      //@ts-expect-error
      bgColorArray = bgColorArray
        .slice(0, 6)
        .reduce(
          (acc, curr, n, arr) =>
            //@ts-expect-error
            n % 2 ? [...acc, `${arr[n - 1]}${curr}`] : acc,
          []
        );
      break;
    default:
      // Invalid bgColor value, so you get the default
      return namedDefaultColor || defaultColor;
  }

  const [r, g, b] = bgColorArray.map((h) => parseInt(h, 16));
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const darkOrLight =
    yiq >= threshold
      ? namedFgDarkColor || fgDarkColor
      : namedFgLightColor || fgLightColor;
  return darkOrLight;
}

const cc = new ContrastColor({
  bgColor: "navy",
  fgDarkColor: "navy",
  fgLightColor: "water",
  customNamedColors: {
    water: "#00D0FF",
  },
});
console.log(cc);

cc.contrastColor({
  bgColor: "#334455"
});

const WORDNIK_KEY = 'lltwsd4lwaqz1q94j89xduakwnzqbj8lz9zxa6l8k8w5pticl';
const WORDNIK_API_URL = 'https://api.wordnik.com/v4/words.json/wordOfTheDay';

function getWordOfTheDay(): Promise<WordnikApiAnswer> {
  const url = new URL(WORDNIK_API_URL);
  url.searchParams.append('api_key', WORDNIK_KEY);

  return fetch(url)
    .then(response => {
      const result: Promise<WordnikApiAnswer> = response.json();

      return result;
    });
}

const unsplashApi = createApi({
  accessKey: 'OphEZ-1zQSA2REeTRj6diooRQ-loTuLqRQZC_yarL7I',
});


function getPhotoOfTheDay(word?: string, alt?: string): Promise<null | { photo: string, color: string }> {
  if (!word) {
    return unsplashApi.photos.getRandom({ count: 1 })
      .then(result => {
        if (!result.response) {
          return null;
        }

        if (Array.isArray(result.response)) {
          return { photo: result.response[0].urls.full, color: result.response[0].color ?? '#fff' };
        }

        return { photo: result.response.urls.full, color: result.response.color ?? '#fff' };
      });
  }

  return unsplashApi.search.getPhotos({ query: word })
    .then(unsplashApiResponse => {
      const result = unsplashApiResponse.response?.results;

      if (!result || result.length === 0) {
        return getPhotoOfTheDay(alt);
      }

      return { photo: result[0].urls.full, color: result[0].color ?? '#fff' };
    });
}



getWordOfTheDay()
  .then(({ word, definitions }) => {
    const definition = definitions[0].text;

    const app = document.querySelector('.app');

    if (!app) {
      throw new Error('app not found');
    }

    app.textContent = `${word}: ${definition}`;

    return getPhotoOfTheDay(word, definition);
  })
    .then((result) => {
      if (!result) {
        return;
      }

      const { color, photo: image } = result;

      const app = document.querySelector<HTMLDivElement>('.app');

      if (!app) {
        throw new Error('app not found');
      }

      app.style.backgroundImage = `url(${image})`;
      app.style.color = cc.contrastColor({ bgColor: color, threshold: 76 });
    });


