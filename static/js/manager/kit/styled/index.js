import styled from 'styled-components'
import {theme} from '../theme'

export const Wrapper = styled.div`
  width: 100%;
  height: ${props => props.height || '100%'};
  position: ${props => props.position || 'absolute'};
  top: 0;
  right: 0;
  left: 0;
  background: ${props => props.background || theme.colors.lightBlue};
  min-width: 700px;
  box-sizing: border-box;
  padding: ${props => props.padding || '0'};
  overflow: ${props => props.overflow || 'auto'};
`

export const Grid = styled.div`
  box-sizing: border-box;
  padding: ${props => props.padding || '0'};
`

export const Row = styled.div`
  display: flex;
  width: ${props => props.width || '100%'};
  margin-bottom: ${props => props.marginBottom || '0'};
`

export const Column = styled.div`
  width: ${props => props.width || '90px'};
  min-width: ${props => props.minWidth || '90px'};
  margin-right: ${props => props.marginRight || '20px'};
`

export const H1 = styled.h1`
  font-size: ${props => props.fontSize || theme.fonts.sizes.header};
  font-weight: 100;
  color: ${theme.colors.black};
  margin-bottom: ${props => props.marginBottom || '0'};
`

export const Block = styled.div`
  width: 100%;
  height:  ${props => props.height || "100%"};
  min-height: ${props => props.minHeight || '90px'};
  border-radius: 5px;
  background: ${theme.colors.white};
  box-sizing: border-box;
  padding:  ${props => props.padding || '25px 20px'};
`

export const Label = styled.div`
  display: ${props => props.display || 'block'};
  color: ${props => props.display || theme.colors.gray};
  font-size: ${props => props.fontSize || theme.fonts.sizes.note};
`
