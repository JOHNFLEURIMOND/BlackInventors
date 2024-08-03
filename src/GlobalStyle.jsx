import { createGlobalStyle } from "styled-components";
import { colors, media } from "./theme"; // Named import

const GlobalStyle = createGlobalStyle`
  :root {
    --font-body: 'Work Sans', sans-serif;
    --font-heading: 'Quicksand', sans-serif;
    --font-size-base: 62.5%;
    --font-size-lg: 6rem;
    --font-size-md: 4.4rem;
    --font-size-sm: 1.8rem;
    --font-size-xs: 1.65rem;
    --font-weight-heading: 700;
    --font-weight-subheading: 400;
    --font-weight-body: 400;
    --color-background: ${colors.background};
    --color-primary-text: ${colors.primaryText};
    --color-accent: ${colors.accent};
    --color-border: ${colors.border};
    --color-button-primary-bg: ${colors.button.primary.backgroundColor};
    --color-button-primary-text: ${colors.button.primary.color};
    --color-shadow: ${colors.shadow};
    --scrollbar-width: 1.5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-body);
  }

  html {
    font-size: var(--font-size-base);
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    background-color: var(--color-background);
    color: var(--color-primary-text);
    scrollbar-color: var(--color-accent);
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: var(--scrollbar-width);
  }

  body::-webkit-scrollbar-track {
    background-color: var(--color-background);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }

  h1 {
    color: var(--color-primary-text);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-heading);
    font-family: var(--font-heading);
  }

  h2 {
    color: var(--color-primary-text);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-subheading);
    text-align: center;
    font-family: var(--font-heading);
  }

  h3 {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-body);
    font-family: var(--font-heading);
  }

  p {
    color: var(--color-primary-text);
    opacity: 0.7;
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--color-accent);
  }

  li {
    list-style: none;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  }

  .common-heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
    font-family: var(--font-heading);
  }

  input, textarea {
    max-width: 50rem;
    color: var(--color-primary-text);
    padding: 1.6rem 2.4rem;
    border: 1px solid var(--color-border);
    text-transform: uppercase;
    box-shadow: var(--color-shadow);
  }

  input[type="submit"] {
    max-width: 16rem;
    margin-top: 2rem;
    background-color: var(--color-button-primary-bg);
    color: var(--color-button-primary-text);
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media (max-width: ${media.tab}) {
    .container {
      padding: 0 3.2rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${media.mobile}) {
    html {
      font-size: 50%;
    }

    .grid {
      gap: 3.2rem;
    }

    .grid-two-column, .grid-three-column, .grid-four-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyle;
