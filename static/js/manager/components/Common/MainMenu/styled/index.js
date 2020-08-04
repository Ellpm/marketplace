import styled from 'styled-components'
import {theme} from '../../../../kit/theme'

export const Element = styled.div`
  height: 60px;
  display: flex;
  box-sizing: border-box;
  padding-left: 40px;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray};
  background: ${props => props.background || theme.colors.white};

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: none;
  }
`

export const Name = styled.p`
  font-size: ${theme.fonts.sizes.main};
  width: 100%;
  color: ${props => props.color || theme.colors.black};
`

export const Link = styled.a`
  color: ${theme.colors.black};
  text-decoration: none;
`
