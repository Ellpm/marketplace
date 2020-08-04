import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { theme } from '../../../kit/theme'
import { H1, Row, Column, Label } from '../../../kit/styled'
import { Button } from '../../../kit/styled/controls'
import { UpdateWrapper, UpdateBlock, Par, HiddenInput, LoadFileWrapper } from './styled'
import { loadNewPriceList } from './AC'

/**
 * UpdateData
 */
class UpdateData extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    priceFile: null
  }

  filePriceHandler = (e) => {
    const priceList = e.target.files[0]
    if (priceList.name.slice(-4) !== 'xlsx') {
      alert("Загружайте только Excel файлы с расширением xlsx")
      return false
    }
    this.props.loadNewPriceList(priceList)
  }

  render() {
    const { priceResp } = this.props
    console.log("priceResp", priceResp)
    return (
      <UpdateWrapper>
        <H1 fontSize={theme.fonts.sizes.selection} marginBottom="5px">Обновление данных</H1>
        <UpdateBlock>
          <Row>
            <Column width="24%">
              <Label>Обновление цен</Label>
              <LoadFileWrapper>
                <HiddenInput type="file" onChange={this.filePriceHandler} />
                <Button
                  width="80%"
                  height="25px"
                  background="#ffffff"
                  border="1px solid #20B72F"
                  color={theme.colors.green}
                >
                  Загрузить прайс
                </Button>
              </LoadFileWrapper>
              { priceResp.loading ? (<p>Началась загрузка</p>) : (<></>) }
              { priceResp.loaded ? (<p>Успешно загруженно</p>) : (<></>) }
              { priceResp.errors ? (<p>Ошибка загрузки</p>) : (<></>) }
            </Column>
            <Column width="24%">
              <Label>Последнее обновление</Label>
              <Par> Дата | Вермя </Par>
              <Par> Пользователь </Par>
              <Par> Обновленны </Par>
            </Column>
            <Column width="24%">
              <Label>Обновление остатков</Label>
                <Button
                  width="80%"
                  height="25px"
                  background="#ffffff"
                  border="1px solid #20B72F"
                  color={theme.colors.green}
                >
                  Обновить сток
                </Button>
            </Column>
            <Column width="24%">
              <Label>Последнее обновление</Label>
                <Par> Дата | Вермя </Par>
                <Par> Пользователь </Par>
                <Par> Обновленны </Par>
            </Column>
          </Row>
        </UpdateBlock>
      </UpdateWrapper>
    );
  }
}

UpdateData.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default connect((state) => {
  return {
    priceResp: state.adminUpdateData
  }
}, {
  loadNewPriceList
})(UpdateData);
