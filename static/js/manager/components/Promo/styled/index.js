import styled from 'styled-components'
import {theme} from '../../../kit/theme'
import DatePicker from 'react-datepicker'


export const DateInput = styled(DatePicker)`
  display: block;
  height: ${props => props.height || '35px'};
  width: ${props => props.width || '100%'};
  border: 0;
  border-radius: 3px;
  background: ${theme.colors.lightBlue};
`


export const DiagramBlock = styled.div`
  height: 240px;
`

export const ColumnHeader = styled.p`
  color: ${theme.colors.gray};
  font-size: ${theme.fonts.sizes.note};
`

export const Item = styled.div`
  height: 50px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding-top: 15px;
  padding-left: 5px;
`

export const Name = styled.p`

`

export const CreationBlock = styled.div`
  box-sizing: border-box;
  height: 150px;
`

export const CreationBtn = styled.div`
  box-sizing: border-box;
  padding-left: 35px;
  padding-top: 30px;
`
