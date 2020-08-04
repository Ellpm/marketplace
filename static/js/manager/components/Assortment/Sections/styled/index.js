import styled from 'styled-components'
import {theme} from '../../../../kit/theme'

export const SectionWrapper = styled.div`
  display: block;
`

export const SectionItem = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin-right: 40px;
  font-size: ${theme.fonts.sizes.selection};
  color: ${theme.colors.blue};
  border-bottom: 1px dashed ${theme.colors.blue};
  margin-bottom: 15px;
  cursor: pointer;
`

export const SectionItemSelect = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin-right: 40px;
  padding: 5px;
  border-radius: 5px;
  font-size: ${theme.fonts.sizes.selection};
  color: ${theme.colors.black};
  background: ${theme.colors.lightBlue};
  margin-bottom: 15px;
`
