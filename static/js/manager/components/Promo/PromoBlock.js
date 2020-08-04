import React, { Component } from 'react';
import { Block, H1 } from '../../kit/styled'

import SectionsList from './Sections/SectionsList'
import Diagram from './Diagram/Diagram'
import CodesList from './PromoCodes/CodesList'

class PromoBlock extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Block>
        <H1>Промо</H1>
        <SectionsList />
        <Diagram />
        <CodesList />
      </Block>
    );
  }
}


export default PromoBlock;
