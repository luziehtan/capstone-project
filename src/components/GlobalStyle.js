import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Quicksand', sans-serif;
  font-size: 105%;
  margin: 0 auto;
  max-width: 600px;
  background: var(--color-background);
}

:root {
  --color-morningblue: #8aa399;
  --color-morningblue-light: rgba(138, 163, 153, 0.3);
  --color-darkbluegray: #5b639a;
  --color-rhythm: #7d84b2;
  --color-rhythm-light: rgba(125, 132, 178, 0.6);
  --color-rhythm-verylight: rgba(125, 132, 178, 0.3);
  --color-rhythm-extremelight: rgba(125, 132, 178, 0.1);
  --color-wildblueyonder: #8fa6cb;
  --color-wildblueyonder-light: rgba(143, 166, 203, 0.3);
  --color-yellowgreencrayola: #dbf4a7;
  --color-aeroblue: #d5f9de;
  --color-congopink: #fb9488;
  --color-palepink: #fed9d5;
  --color-almostblack: #222;
  --color-darkgray: #bbb;
  --color-gray: #eee;
  --color-white: #fff;
  --color-background: #f8f8ff;

  --font-extrasmall: 0.6em;
  --font-small: 0.7em;
  --font-medium: 0.8em;
  --font-large: 0.9em;
  --font-extralarge: 1em;
  --font-xxlarge: 1.2em;
}


`
