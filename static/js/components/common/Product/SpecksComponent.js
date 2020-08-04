import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {generateSpecTable} from '../../../helpers/converters'
import {theme} from '../../kit/theme'
import {Row, Col} from '../../kit/Grid'

const SpecHeader = styled.h3`
  font-size: 1.4em;
  color: ${props => props.theme.color.dark};
  font-family: 'Roboto Slab';
  margin-top: 45px;
`;

const SpecTable = styled.table`
  width: 90%;
  margin-bottom: 45px;
`;

const SpecRow = styled.tr`
  border: 1px solid ${props => props.theme.color.darkGray};
  border: 0;
`;

const SpecCell = styled.td`
  color: ${props => props.theme.color.black};
  font-size: 14px;
  padding: 10px;
  padding-right: 15px;
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  min-height: 200px;
  margin-top: 20px;
`

const Specks = (props) => {

  const specs = props.specks.split(';').map(item => {
      return(
        <SpecRow>
          {item.split(':').map(it => {
            return(
              <SpecCell>{it}</SpecCell>
            )
          })}
        </SpecRow>
      )
    });

    const storage = props.storage.split(';').map(item => {
        return(
          <SpecRow>
            {item.split(':').map(it => {
              return(
                <SpecCell>{it}</SpecCell>
              )
            })}
          </SpecRow>
        )
      });

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h2>Характеристики</h2>
        <Row>
          <Col size={1}>
            <SpecTable>
              {specs}
            </SpecTable>
          </Col>
          <Col size={1}>
            {storage}
          </Col>
        </Row>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Specks
