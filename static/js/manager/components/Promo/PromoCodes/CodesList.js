import React, { Component  } from 'react'
import { connect } from 'react-redux'

import { Row, Column } from '../../../kit/styled'
import { ColumnHeader } from '../styled'
import CodesItem from './CodesItem'
import { loadAllPromocodes } from '../AC'

import { codes } from './codes'

class CodesList extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadAllPromocodes()
  }

  renderItems = (codes) => {
    const result = codes.map(item => {
      return(
        <CodesItem elem={item} />
      )
    })
    return result
  }

  render() {

    const { promocodes } = this.props
    console.log(promocodes)
    if ( promocodes.loading ) return <h1>Загрузка</h1>

    return (
      <div>
        { promocodes.loaded ? (
          <>
          <div>
            <Row>
              <Column minWidth='20%'>
                <ColumnHeader>Название кода</ColumnHeader>
              </Column>
              <Column minWidth='20%'>
                <ColumnHeader>Дата создания</ColumnHeader>
              </Column>
              <Column minWidth='20%'>
                <ColumnHeader>Дата окончания</ColumnHeader>
              </Column>
              <Column minWidth='18%'>
                <ColumnHeader>Количество покупок</ColumnHeader>
              </Column>
              <Column minWidth='20%'>
                <ColumnHeader>Скидка</ColumnHeader>
              </Column>
            </Row>
          </div>
          <div>
            {this.renderItems(promocodes.entitys)}
          </div>
          </>
        ) : (<></>) }
      </div>
    );
  }
}


export default connect((state) => {
  return {
    promocodes: state.adminPromoCodes
  }
}, { loadAllPromocodes })(CodesList);
