import styled, {ThemeProvider} from 'styled-components'

export const Wrapper = styled.div`
  padding: 15px;
  padding-top: 25px;
  border: 1px solid ${props => props.theme.color.green};
  width: 90%;
  min-height: 300px;
`

export const Input = styled.input`
  width: 90%;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.darkGray};
`

export const Selection = styled.span`
  color: ${props => props.theme.color.green}
`

export const Label = styled.label`
  display: block;
  font-size: 15px;
  color: ${props => props.theme.color.darkGray};
  margin-bottom: 5px;
`

export const NameBlock = styled.div`
  margin-top: 20px;
`

export const TextArea = styled.textarea`
  width: 99%;
  height: 70px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.darkGray};
`

export const Button = styled.div`
  width: ${props => props.width || '70%'};
  min-width: 150px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.green || props.background};
  font-weight: bold;
  font-size: 18px;
`
