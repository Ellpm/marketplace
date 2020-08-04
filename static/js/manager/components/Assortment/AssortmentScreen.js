import React, { Component } from 'react'

import { Wrapper, Grid, Row, Column } from '../../kit/styled'
import Header from '../Common/Header/Header'
import MainMenu from '../Common/MainMenu/MainMenu'
import FiltersList from '../Common/FiltersList/FiltersList'
import AssortmentBlock from './Assortment'

import { filters } from './filters'
  
export class Assortment extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Header />
        <Grid padding='25px 20px'>
          <Row>
            <Column minWidth='200px'>
              <MainMenu />
            </Column>
            <Column width='55%' minWidth='500px'>
              <AssortmentBlock />
            </Column>
            <Column minWidth='315px'>
              <FiltersList
                filters={filters}
              />
            </Column>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}


export default Assortment;
