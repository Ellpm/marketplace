import React, { Component } from 'react';

import { Wrapper, Grid, Row, Column, Block } from '../../kit/styled'
import Header from '../Common/Header/Header'
import MainMenu from '../Common/MainMenu/MainMenu'
import FiltersList from '../Common/FiltersList/FiltersList'
import PromoBlock from './PromoBlock'
import PromoCreator from './Create/PromoCreator'

export class PromoScreen extends Component { // eslint-disable-line react/prefer-stateless-function
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
              <PromoBlock />
            </Column>
            <Column minWidth='315px'>
              <Block>
                <PromoCreator />
                {/*<FiltersList noSelfPadding={true} />*/}
              </Block>
            </Column>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}


export default PromoScreen;
