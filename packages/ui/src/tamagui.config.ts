import { createTamagui, createTokens } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from './animations'

const fontSizes = {
  0: 12 /*xs*/,
  1: 14 /*sm*/,
  2: 16 /*base*/,
  3: 18 /*lg*/,
  true: 18,
  4: 20 /*xl*/,
  5: 24 /*2xl*/,
  6: 30 /*3xl*/,
  7: 36 /*4xl*/,
}

const headingFont = createInterFont({
  size: fontSizes,
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  /*
  weight: {
    6: '400',
    7: '700',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },*/
})

const bodyFont = createInterFont(
  {
    size: fontSizes,
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    //sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

const sizes = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  true: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
}

const customTokens = createTokens({
  size: sizes,
  space: { ...sizes, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3, true: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
    primary: 'tomato',
    secondary: 'darkorange ',
  },
})

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes,
  tokens: customTokens,
  media: createMedia({
    xs: { maxWidth: 592 },
    sm: { maxWidth: 768 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 592 + 1 },
    gtSm: { minWidth: 768 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
