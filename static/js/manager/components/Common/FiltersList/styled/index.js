import styled from 'styled-components'
import {theme} from '../../../../kit/theme'

export const FilterBlock = styled.div`
  height: 50px;
  background: ${theme.colors.lightBlue};
  border-radius: 3px;
  margin-bottom: 5px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-size: ${theme.fonts.sizes.selection};
  color: ${theme.colors.black};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

export const FilterName = styled.p`

`

export const Arrow = styled.div`
  width: 25px;
  height: 25px;
  background: ${theme.colors.blue};
  border-radius: 13px;
  box-shadow: 0px 4px 4px rgba(25, 47, 90, 0.25);
`
