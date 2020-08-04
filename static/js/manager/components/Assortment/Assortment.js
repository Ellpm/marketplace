import React, { Component } from 'react';

import { Block, H1 } from '../../kit/styled'
import SectionList from './Sections/SectionsList'
import ProductsList from './Products/ProductsList'
import UpdateData from './UpdateData/UpdateData'

class AssortmentBlock extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    selectSectionName: 'Продукция',
    selectSectionId: 'production'
  }

  render() {
    const { selectSectionName, selectSectionId } = this.state
    return (
      <Block>
        <SectionList
          selectSectionId={selectSectionId}
        />
        <H1>Ассортимент / {selectSectionName}</H1>
        <UpdateData />
        <ProductsList />
      </Block>
    );
  }
}


export default AssortmentBlock;
