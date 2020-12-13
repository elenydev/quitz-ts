interface Breakepoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xlg: number;
}

const breakpoints: Breakepoints = {
  xs: 620,
  sm: 768,
  md: 960,
  lg: 1280,
  xlg: 1500,
};

interface Colors {
  white: string;
  black: string;
  darkerWhite: string;
}

interface FontWeight {
  weight: {
    light: number;
    medium: number;
    semibold: number;
    bold: number;
    xbold: number;
  };
  size: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
  };
}

interface BoxShadows {
  light: string;
  dark: string;
}

interface Theme {
  colors: Colors;
  font: FontWeight;
  boxShadow: BoxShadows;
  mq: unknown;
}

export const theme: Theme = {
  colors: {
    white: `#FFF`,
    black: `#111`,
    darkerWhite: `#ffffffcc`,
  },
  font: {
    weight: {
      light: 300,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 800,
    },
    size: {
      xxs: `0.8em`,
      xs: `1em`,
      sm: `1.4em`,
      md: `2em`,
      lg: `2.5em`,
      xlg: `3em`,
    },
  },
  boxShadow: {
    light: `rgba(0, 0, 0, 0.6) 2px 2px 8px 0px`,
    dark: `0 15px 10px #000`,
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),
};
