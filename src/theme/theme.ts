'use strict'

import { linearGradient } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { getBreakpoint, getSpacingGetter } from './utils'

export const theme = {
  media: {
    xs: getBreakpoint(416, 667),
    sm: getBreakpoint(668, 991),
    md: getBreakpoint(992, 1311),
    lg: getBreakpoint(1311, 1599)
  },
  color: {
    primary1: '#3f51b5',
    primary2: '#2c387e',
    secondary1: '#FD725A',
    success1: '#4caf50',
    warning1: '#ff9800',
    danger1: '#f44336',
    black1: '#191919',
    white1: '#fff',
    gray1: '#2b3140'
  },
  radius: {
    large: '0.8rem',
    medium: '0.5rem',
    small: '0.3rem'
  },
  font: {
    primary: 'helvetica, sans-serif',
    secondary: 'bookman, serif'
  },
  fontSize: {
    text1: '1rem',
    text2: '1.2rem',
    text3: '1.5rem',
    text4: '1.6rem',
    text5: '1.8rem',
    title1: '4rem',
    title2: '3.2rem',
    title3: '3rem',
    title4: '2.4rem',
    title5: '2rem'
  },
  spacing: getSpacingGetter(0.5)
}

export type Theme = typeof theme

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    height: 100%;
    color: ${theme.color.white1};
    font-family: ${theme.font.primary};
    scroll-behavior: smooth;
  }

  html {
    font-size: 10px;
    background: ${linearGradient({
      colorStops: [
        `${theme.color.primary2} 0%`,
        `${theme.color.primary1} 100%`
      ],
      toDirection: '0',
      fallback: theme.color.primary2
    })};
  }

  body {
    font-size: ${theme.fontSize.text4};
    line-height: 1.4;
  }
  
  h1, h2, h3, h4, h5 {
    font-family: ${theme.font.secondary};
  }
  
  h1 {
    font-size: 2.5rem;
    margin: 0 0 5rem;
    
    ${(p) => p.theme.media.sm.up} {
      font-size: 5.5rem;
    margin: 0 0 10rem;
      }
  }
  
  h2 {
  font-size: 1.4rem;
  margin: 4rem 0 .5rem;
        letter-spacing: .3rem;
        font-weight: 400;
        text-transform: uppercase;
        opacity: .5;
        
        ${(p) => p.theme.media.sm.up} {
      font-size: 1.6rem;
      }
  }


      //@media screen and (max-width: 650px) {
      //  .title {
      //    font-size: 1.4rem;
      //  }
      //
      //  .title--big {
      //    font-size: 2.5rem;
      //    margin: 0 0 5rem;
      //  }
      //}
`
