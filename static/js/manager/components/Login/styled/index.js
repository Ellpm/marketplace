import styled from 'styled-components'
import {theme} from '../../../kit/theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${theme.colors.lightBlue};
  min-width: 700px;
`

export const Login = styled.div`
  width: 640px;
  height: 350px;
  background: ${theme.colors.white};
  border-radius: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -175px 0 0 -320px;
  box-shadow: 0px 0px 40px rgba(111, 133, 133, 0.45);
  padding: 90px;
  box-sizing: border-box;
`

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: ${theme.fonts.sizes.main};
  color: ${theme.colors.black};
`

export const Input = styled.input`
  display: block;
  background: ${props => props.background || theme.colors.lightBlue};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '40px'};
  margin-bottom: 20px;
  border: 0;
  border-radius: 3px;
  padding: 3px;
  color: ${theme.colors.black};
  font-size: ${theme.fonts.sizes.header};
  box-sizing: border-box;
`

export const BntWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '40px'};
  background: ${props => props.background || theme.colors.green};
  border: 0;
  border-radius: 3px;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.sizes.header};
  cursor: pointer;

  :hover {
    background: ${props => props.hoverBackground || theme.colors.darkGreen};
  }
`

export const ErrorForm = styled.div`
  position: absolute;
  top: 15px;
  left: 90px;
  width: 460px;
  height: 35px;
  background: rgba(233, 8, 8, 0.10);
  border-radius: 5px;
  border: 1px solid ${theme.colors.red};
  color: ${theme.colors.red};
  text-align: center;
  font-size: ${theme.fonts.sizes.header};
`
