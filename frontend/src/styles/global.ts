import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(165deg, #312e38, #614627);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;

    @-webkit-keyframes AnimationName {
        0%{background-position:27% 0%}
        50%{background-position:74% 100%}
        100%{background-position:27% 0%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:27% 0%}
        50%{background-position:74% 100%}
        100%{background-position:27% 0%}
    }
    @keyframes AnimationName {
        0%{background-position:27% 0%}
        50%{background-position:74% 100%}
        100%{background-position:27% 0%}
    }
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight:500;
  }

  button {
    cursor: pointer;
  }

`;
