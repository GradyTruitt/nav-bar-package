import { injectGlobal, css } from 'styled-components'

export default {
  // colors
  primaryColor: '#265DF1',
  accentColor1: '#27D2E1',
  accentColor2: '#11151D',
  accentColor3: '#1A306C',
  fontColor: '#57657A',
  backgroundColor: '#F8F8F8',
  //shadow
  shadow: '0 3px 10px 0 rgba(0, 0, 0, 0.15)',
  // fonts
  fontFamily: "'Raleway'",
  //weights
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  // screen sizes
  xl: 1250,
  desktop: 950,
  tablet: 768,
  phone: 414
}

// Inject reset.css into main style sheet;
export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,800,900');

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    font-family: 'Raleway', sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: 300;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: none;
  }
`

injectGlobal`${globalStyles}`
