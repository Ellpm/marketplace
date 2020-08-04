import styled from 'styled-components'
import { theme } from '../../../../kit/theme'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin-top: 20px;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Product = styled.div`
  width: 47%;
  height: 100%;
  min-height: 500px;
  min-width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
`

export const HeaderElem = styled.div`
  width: 50%;
  background: ${props => props.background};
  border-top-left-radius: ${props => props.borderRadiusLeft};
  border-top-right-radius: ${props => props.borderRadiusRight};
  box-sizing: content-box;
  color: white;
  padding: 5px;
  font-size: ${theme.fonts.sizes.note};
`

export const Packshoot = styled.div`
  width: 100%;

`
export const THeader = styled.p`
  font-size: ${theme.fonts.sizes.main};
  color: ${props => props.color || theme.colors.black};
  display: ${props => props.display || 'block'};
`
