import {createGlobalStyle} from 'styled-components'


export const GlobalStyled = createGlobalStyle`

  :root{
    --background-color: #0A0A0A ;
    --green-color: #11E70D;
    --color-text: #FFF;
    --color-subtitle: #EEF0FB;
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