import styled from 'styled-components';
import {theme} from './theme'

export const media = {
  xs: (styles) => `
    @media only screen and (max-width: ${theme.sizes.mobileL}) {
      ${styles}
    }
  `,
  lg: (styles) => `
    @media only screen and (min-width: ${theme.sizes.tablet}) {
      ${styles}
    }
  `,
}


export const Grid = styled.div`

`;

export const Row = styled.div`
  display: flex;
  ${(props) => props.inlineBlock && media[props.inlineBlock](`
    display: inline-block;
  `)}
  ${(props) => props.hide && media[props.hide](`
    display: none;
  `)};
  ${(props) => props.block && media[props.block](`
    display: inline-block;
  `)};
`;


export const Col = styled.div`
  flex: ${(props) => props.size};
  width: ${(props) => props.width};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)};
  ${(props) => props.inlineBlock && media[props.inlineBlock](`
    display: inline-block;
  `)};
  ${(props) => props.block && media[props.block](`
    display: inline-block;
  `)};
`;

export const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
