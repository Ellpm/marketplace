import styled from 'styled-components'
import {theme} from '../theme'


export const Input = styled.input`
  display: block;
  height: ${props => props.height || '35px'};
  width: ${props => props.width || '100%'};
  border: 0;
  border-radius: 3px;
  background: ${theme.colors.lightBlue};
  margin-bottom: ${props => props.marginBottom || '0'}
`

export const Button = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || theme.colors.green};
  border-radius: ${props => props.borderRadius || '5px'};
  border: ${props => props.border || 'none'};
  color: ${props => props.color || theme.colors.white};
  font-size: ${props => props.fontSize || theme.fonts.sizes.main};
  height: ${props => props.height || '40px'};
  width: ${props => props.width || '170px'};
  cursor: pointer;
  margin-bottom: ${props => props.marginBottom || '0'}
`

export const TextArea = styled.textarea`
  display: block;
  height: ${props => props.height || '35px'};
  width: 100%;
  border: 0;
  border-radius: 3px;
  background: ${theme.colors.lightBlue};
`

export const Select = styled.select`
  display: block;
  height: ${props => props.height || '35px'};
  width: 100%;
  border: 0;
  border-radius: 3px;
  background: ${theme.colors.lightBlue};
`
