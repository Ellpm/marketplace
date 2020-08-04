import React, { Component } from 'react';

import { theme } from '../../../kit/theme'
import { Wrapper, Row, Column, H1 } from '../../../kit/styled'
import Logotype from './Logotype'
import UserBlock from './UserBlock'
/**
 * Header
 */
class Header extends Component { // eslint-disable-line
  render() {
    return (
      <Wrapper
        height={theme.blocks.header.height}
        position='relative'
        background={theme.colors.white}
        padding='25px 20px'
        overflow='none'
      >
        <Row>
          <Column minWidth='200px'>
            <Logotype />
          </Column>
          <Column width='55%' minWidth='500px'>
            <H1>Административная панель</H1>
          </Column>
          <Column minWidth='315px'>
            <UserBlock />
          </Column>
        </Row>
      </Wrapper>
    );
  }
}



export default Header;
