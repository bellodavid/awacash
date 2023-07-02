type value = string;

export interface ThemeType {
  primary: value;
  secondary: value;
  green: value;
  red: value;
  black: value;
  white: value;
  text: value;
  background: value;
  card: value;
  notification: value;
  border: value;
  inactive: value;
  grey: value;
  altBG: value;
  transparent: value;
  modal: value;
  dark: value;
  darkGrey: value;
  inputBorder: value;
}

export const pallets = {
  azure: '#0085FF',
  black: '#0B0B0B',
  buttonInactive: '#0C0D340D', //202030
  cadet: '#1D3461',
  cameoPink: '#E6BCCD',
  carmine: '#D62246',
  dark: '#2C363F',
  darkGrey: '#8a8d90',
  green: '#06D6A0', //#00FFDD
  grey: '#CFDBDD', //F4F0EF
  inactive: '#E3E3E3',
  khaki: '#E8E288',
  lightGrey: '#F3F3F7',
  lightOrange: '#FCD0A1',
  mantis: '#7DCE82',
  notification: '#F79836',
  primary: '#F79836',
  red: '#FF0058', //#A22C29 #A4243B
  secondary: '#4F000B',
  transparent: 'transparent',
  ultraMarine: '#470FF4',
  white: '#FFFFFF',
};
//1D3461
const colors: { dark: ThemeType; light: ThemeType } = {
  dark: {
    ...pallets,
    altBG: '#050B14',
    background: '#04080F', //001427 131515  001427
    border: '#08101F',
    card: '#04080F',
    inputBorder: '#ECF6FD',
    modal: '#08101F',
    text: '#DAE3E5',
  },
  light: {
    ...pallets,
    altBG: '#FAFAFA', //#F5F5F5 #FAFAFF #EBFEF9 #FAFAFA #FCFCFC
    background: '#FFFFFF',
    border: '#DFE5E3',
    card: '#FFFFFF',
    inputBorder: '#020B13',
    modal: '#FAFAFF',
    text: '#04080F',
  },
};

export default colors;
