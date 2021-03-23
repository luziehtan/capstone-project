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
  background: #F8F8FF;
}
input,
button {
  font-size: inherit;
  padding: 5px;
}
`
