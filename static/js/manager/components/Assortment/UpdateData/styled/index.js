import styled from 'styled-components'
import { theme } from '../../../../kit/theme'

export const UpdateWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`

export const UpdateBlock = styled.div`
  height: 100%;
  min-height: 100px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 5px;
`

export const LoadFileWrapper = styled.div`
  width: 100%;
  position: relative;

`

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  background: red;
  z-index: 100;
`

export const Par = styled.p`
  font-size: ${theme.fonts.sizes.note};
  margin-top: 5px;
`
