import styled from 'styled-components';

export const Input = styled.input`
  width: ${props => props.width || "50%"};
  height: 20px;
  display: inline-block;
  margin-top: 5px;
  border-radius: 3px;
  border: 1px solid #cccccc;
`

export const Card = styled.div`
  width: ${props => props.width || "20%"};
  display: inline-block;
  margin: 10px;
  padding: 10px;
  box-shadow: 1px 1px 10px rgba(0,0,0, 0.2);
`
