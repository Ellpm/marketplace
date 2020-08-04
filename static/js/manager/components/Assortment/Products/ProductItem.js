import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import { Label, Block, Row, Column } from '../../../kit/styled/index'
import { Input, Button, TextArea, Select } from '../../../kit/styled/controls'
import { Product, Header, HeaderElem, THeader } from './styled'
import { theme } from '../../../kit/theme'
import { renderOptions } from '../../../utils/selectors'
/**
 * ProductItem
 */
class ProductItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    product: {},
    scuName: '',
    categoryId: '',
    brandId: '',
    packageId: '',
    countryId: '',
    volumeId: '',
    tagId: '',
    visibility: 'false',
    collections: null,
    isFullInfo: false,
    mdId: '',
    mbcId: '',
    packshoot: [],
    description: ''
  }

  componentDidMount() {
    const { product } = this.props
    this.setState({
      product,
      scuName: product.scu_name,
      visibility: String(product.isshow),
      isFullInfo: this.checkIsFullInfo(product),
      categoryId: product.category_id,
      brandId: product.brand_id,
      packageId: product.package_id,
      countryId: product.country_id,
      volumeId: product.volume_id,
      tagId: product.tag_id,
      collections: product.collections,
      mdId: product.md_id,
      mbcId: product.mbc_id,
      stock: product.stock,
      price: product.price_by_one,
      packshoot: product.packshoot,
      description: product.description
    })
  }

  checkIsFullInfo = (prod) => {
    console.log("CHECK", prod.description.length > 0, prod.tag_id, prod.packshoot.length)
    const isFull = prod.category_nameid === 'NO_CATEGORY'
          || prod.country_nameId === 'NO_COUNTRY'
          || prod.package_name === 'NO_PACKTYPE'
          || prod.volume_nameId === '0'
          || !(prod.description.length > 0)
          || !(prod.packshoot.length > 0)
          || !(prod.tag_id)
    return isFull
  }

  showPackShoot = () => {

  }

  renderOptions = (arr, id, propId, propShow) => {
    if (arr.length === 0) return <option>Нет данных</option>
    const result = arr.map(item => {
      return <option value={item.id} key={item.id}>{item[propShow]}</option>
    })
    return result
  }

  changeHandler = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  renderCollection = () => {
    const { collections } = this.state

    if (!collections) return <Label>Продукт не в коллекциях</Label>
  }

  updateProductInfo = () => {
    const { scuName, visibility, categoryId, brandId, packageId, countryId, volumeId, description } = this.state
    const data = {
      scu_name: scuName,
      isshow: visibility,
      category_id: +categoryId,
      brand_id: +brandId,
      package_id: +packageId,
      country_id: +countryId,
      volume_id: +volumeId,
      description
    }
    console.log(data)
    alert("В разработке")
  }

  renderLinedData = () => {
    const { mdId, mbcId, stock, price } = this.state

    return(
      <>
        <Row>
          <Column minWidth="25%" marginRight="0">
            <THeader>МД ID</THeader>
          </Column>
          <Column minWidth="25%" marginRight="0">
            <THeader>МПК ID</THeader>
          </Column>
          <Column minWidth="25%" marginRight="0">
            <THeader>Остаток</THeader>
          </Column>
          <Column minWidth="25%" marginRight="0">
            <THeader>Цена</THeader>
          </Column>
          <Column minWidth="25%" marginRight="0">
          </Column>
        </Row>
        <Row>
          <Column minWidth="25%" width="25%" marginRight="0">
            <THeader color={theme.colors.gray}>{mdId}</THeader>
          </Column>
          <Column minWidth="25%" width="25%" marginRight="0">
            <THeader color={theme.colors.gray}>{mbcId}</THeader>
          </Column>
          <Column minWidth="25%" width="25%" marginRight="0">
            <THeader color={theme.colors.gray}>{stock}</THeader>
          </Column>
          <Column minWidth="25%" width="25%" marginRight="0">
            <Input
              height="24px"
              value={price}
              name="price"
              onChange={this.changeHandler}
              width="80%"
              type="number"
            />
          </Column>
        </Row>
      </>
    )
  }

  toogleVisibility = (e) => {
    this.setState({ visibility: e.target.value})
  }

  render() {
    const { product,
            isFullInfo,
            scuName, visibility, categoryId, brandId, packageId, countryId, volumeId, description } = this.state
    const { categories, brands, countries, packages, volumes } = this.props

    let categoriesList, brandsList, countriesList, packagesList, volumesList = ''
    if (categories.loaded && brands.loaded && countries.loaded && volumes.loaded ) {
      categoriesList = this.renderOptions(categories.entitys, product.category_nameid, 'cat_id', 'cat_name')
      brandsList = this.renderOptions(brands.entitys, product.brand_nameId, 'brand_id', 'brand_name')
      countriesList = this.renderOptions(countries.entitys, product.country_nameId, 'country_id', 'country_name')
      packagesList = this.renderOptions(packages.entitys, product.package_nameId, 'package_id', 'package_name')
      volumesList = this.renderOptions(volumes.entitys, product.volume_nameId, 'volume_id', 'volume_name')
    }

    return (
      <Product>
        <Header>
          {
            isFullInfo ? (
              <HeaderElem
                background={theme.colors.red}
                borderRadiusLeft="10px"
              >
                Не заполнена карточка
              </HeaderElem>
            ) : (
              <HeaderElem
                background={theme.colors.green}
                borderRadiusLeft="10px"
              >
                Карточка заполнена
              </HeaderElem>
            )
          }
          {
            product.isshow ? (
              <HeaderElem
                background={theme.colors.green}
                borderRadiusRight="10px"
              >
                Показан на сайте
              </HeaderElem>
            ) : (
              <HeaderElem
                background={theme.colors.red}
                borderRadiusRight="10px"
              >
                Не показан на сайте
              </HeaderElem>
            )
          }
        </Header>
        <Block
          padding="10px"
        >
          <Row>
            <Column
              width="30%"
            >
              <Label>Пекшот</Label>
              <div>

              </div>
            </Column>
            <Column
              width="65%"
              marginRight="0"
            >
              <Row marginBottom="5px">
                <Column width="100%" marginRight="0">
                  <Label>Источник данных</Label>
                  <p>Функционал в разработке</p>
                </Column>
              </Row>
              <Row marginBottom="5px">
                <Column width="100%" marginRight="0">
                  <Label>Название</Label>
                  <Input
                    height="24px"
                    name="scuName"
                    value={scuName}
                    onChange={this.changeHandler}
                  />
                </Column>
              </Row>
              <Row marginBottom="5px">
                <Column width="50%" marginRight="10px">
                  <Label>Категория</Label>
                  <Select
                    height="24px"
                    value={categoryId}
                    onChange={this.changeHandler}
                    name="categoryId"
                  >
                    { categories.loaded ? (categoriesList) : (<></>) }
                  </Select>
                </Column>

                <Column width="50%" marginRight="0">
                  <Label>Бренд</Label>
                  <Select
                    height="24px"
                    value={brandId}
                    name="brandId"
                    onChange={this.changeHandler}
                  >
                    { brands.loaded ? (brandsList) : (<></>) }
                  </Select>
                </Column>
              </Row>
              <Row marginBottom="5px">
                <Column width="50%" marginRight="10px">
                  <Label>Упаковка</Label>
                  <Select
                    height="24px"
                    value={packageId}
                    name="packageId"
                    onChange={this.changeHandler}
                  >
                    { packages.loaded ? (packagesList) : (<></>) }
                  </Select>
                </Column>
                <Column width="50%" marginRight="0">
                  <Label>Страна</Label>
                  <Select
                    height="24px"
                    value={countryId}
                    name="countryId"
                    onChange={this.changeHandler}
                  >
                    { countries.loaded ? (countriesList) : (<></>) }
                  </Select>
                </Column>
              </Row>
              <Row marginBottom="5px">
                <Column width="50%" marginRight="10px">
                  <Label>Объем</Label>
                  <Select
                    height="24px"
                    value={volumeId}
                    name="volumeId"
                    onChange={this.changeHandler}
                  >
                    { volumes.loaded ? (volumesList) : (<></>) }
                  </Select>
                </Column>
                <Column width="50%" marginRight="0">
                  <Label>Подкатегория</Label>
                  <Select  height="24px">
                    <option>{product.country_name}</option>
                  </Select>
                </Column>
              </Row>
            </Column>
          </Row>

          <Row marginBottom="5px">
            <Column width="100%" marginRight="10px">
              <Label>Коллекции</Label>
              { this.renderCollection() }
              <p>Добавить в коллекцию</p>
            </Column>
          </Row>

          <Row marginBottom="5px">
            <Column width="100%" marginRight="0px">
              <Label>Описание</Label>
              <TextArea
                height="54px"
                value={description}
                name="description"
                onChange={this.changeHandler}
              />
            </Column>
          </Row>

          <Row marginBottom="5px">
            <Column width="100%" marginRight="0px">
              <Label>Видимость на сайте</Label>
              <label>
                <input
                  type="radio"
                  value={true}
                  checked={visibility === 'true'}
                  onChange={this.toogleVisibility}
                />
              <THeader display="inline">Показать на сайте</THeader>
              </label>
              <label>
                <input
                  type="radio"
                  value={false}
                  checked={visibility === 'false'}
                  onChange={this.toogleVisibility}
                />
              <THeader display="inline">Скрыть на сайте</THeader>
              </label>
            </Column>
          </Row>

          <Row marginBottom="5px">
            <Column width="100%" marginRight="0px">
              <Label>Связывание данных</Label>
              { this.renderLinedData() }
            </Column>
          </Row>

          <Row marginBottom="30px">
            <Column width="100%" marginRight="0px">
              <Button onClick={this.updateProductInfo}>Сохранить</Button>
            </Column>
          </Row>

        </Block>
      </Product>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem;
