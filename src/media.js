import { css } from 'styled-components'

const sizes = {
   xs: 576,
   sm: 768,
   md: 992,
   lg: 1200,
   xl: 1600,
   xxl: 2000,
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})