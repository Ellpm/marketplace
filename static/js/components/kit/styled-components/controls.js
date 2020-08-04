import styled from 'styled-components'

/*******************/
//  Props
//  background: default: props.theme.color.green
//  height: default: 30px
//
/*******************/

export const Button = styled.div`
  background: ${props => props.theme.color.green || props.background};
  height:  ${props => props.height || '30px'};
  border-radius: 5px;
  width: ${props => props.width || '80%'};
  margin-top: 15px;
  color: ${props => props.theme.color.white};
  text-align: center;
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '18px'};
  padding-top: ${props => props.paddingTop || '9px'};
  padding-bottom: ${props => props.paddingBottom || '9px'};
  padding-left: 5px;
  cursor: pointer;
  margin-left: ${props => props.marginLeft || '1px'};
  :hover {
    background: ${props => props.theme.color.darkGreen || props.hoverColor};
  }
  :before {
    content: " ";
    width: ${props => props.showIcon ? '20px' : ''};
    height: 20px;
    background: url('/img/common/basket.svg') no-repeat;
    background-size: contain;
    position: absolute;
    margin-left: -28px;
  }
`
