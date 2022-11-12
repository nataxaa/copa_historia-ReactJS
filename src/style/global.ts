import {createGlobalStyle} from 'styled-components'


export const GlobalStyled = createGlobalStyle`

  :root{
    --background-color: #F9F9ED ;
    --green-color: #11E70D;
    --color-text: #000;
    --color-subtitle: #00272B;
  }

  html{
        scroll-behavior:smooth;
    }

  *{
    margin: 0 ;
    padding: 0 ;
  }

  body{
    font-family: 'Signika Negative', sans-serif;
    background-color:var(--background-color) ;
    color: var(--color-text) ;
  }

`