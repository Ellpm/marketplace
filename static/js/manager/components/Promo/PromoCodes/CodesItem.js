import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row, Column } from '../../../kit/styled'
import { Item } from '../styled'
/**
 * CodesItem
 */
class CodesItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { elem } = this.props

    const startDate = new Date(elem.start_promo)
    const endDate = new Date(elem.end_promo)

    console.log(startDate.getDate(), startDate.getMonth(), startDate.getFullYear())

    return (
      <Item>
        <Row>
        <Column minWidth='20%'>
          {elem.name}
        </Column>
        <Column minWidth='20%'>
          { startDate.getDate() + ' / ' + (parseInt(startDate.getMonth())+1) + ' / ' + startDate.getFullYear() }
        </Column>
        <Column minWidth='20%'>
          { endDate.getDate() + ' / ' +  (parseInt(endDate.getMonth())+1) + ' / ' + endDate.getFullYear() }
        </Column>
        <Column minWidth='18%'>
          {elem.sales}
        </Column>
        <Column minWidth='20%'>
          {elem.discount}
        </Column>
        </Row>
      </Item>
    );
  }
}

CodesItem.propTypes = {
  elem: PropTypes.object.isRequired
}

export default CodesItem;
