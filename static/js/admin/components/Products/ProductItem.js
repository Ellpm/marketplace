import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Card, Input} from '../styled'

import { SERVER_ADDR } from '../../../constans'
const PRODUCTS_API = SERVER_ADDR + "api/products"


const SelectBlock = styled.div`
  display: inline-block;
  margin: 10px;
  width: 45%;
`

const SelectLabel = styled.label`
  display: block;
  color: gray;
  font-size: 13px;
`

const Select = styled.select`
  width: 90%;
  height: 30px;
`

const TextBlock = styled.textarea`
  width: 90%;
  height: 70px;
`

const Image = styled.div`
  display: inline-block;
  height: 70px;
  width: 40%;
  background: url('${props => props.bg}') no-repeat;
  background-size: contain;
`

const Ready = styled.div`
  background: green;
  width: 100%;
  height: 20px;
  color: white;
`

const NotReady = styled.div`
  background: red;
  width: 100%;
  height: 20px;
  color: white;
`

// На проде другие значения!
const fv = {
  category: 8,
  brand: 14,
  packageId: 5,
  country: 1,
  volume: 11,
}

class ProductItem extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    scuName: '',
    category: null,
    brand: null,
    packageId: null,
    country: null,
    subcategory: null,
    volume: null,
    isChange: false,
    description: '',
    fstPackshoot: null,
    scndPackshoot: null,
    tag: null,
    isShow: null,
    isReady: false
  }


  componentDidMount() {
    this.setState({
      scuName: this.props.product.scu_name,
      description: this.props.product.description,
      isShow: String(this.props.product.isshow),
      category: this.props.product.category_id,
      brand: this.props.product.brand_id,
      packageId: this.props.product.package_id,
      country: this.props.product.country_id,
      subcategory: this.props.product.sub_category_id,
      volume: this.props.product.volume_id,
      tag: this.props.product.tag_id
    })

  }

  saveProductUpdate = () => {
    console.log("------------- SAVE -------------------")
    const URI = PRODUCTS_API + "/" + this.props.product.id
    const {description, scuName, brand, category, packageId, volume, country, subcategory, tag} = this.state

    const data = {
      categoryId: category,
      brandId: brand,
      description: description,
      scuName: scuName,
      packageId: packageId,
      volumeId: volume,
      countryId: country, 
      subcategory: subcategory,
      tag_id: +tag,
      isshow: JSON.parse(this.state.isShow)
    }
    console.log(data, "this.props.product.id")
    fetch(URI, {
      method: "PUT",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    .then(resp => {
      return resp.text()
    })
    .then(data => {
      console.log(data)
      alert("Сохранено...")
      //window.location.reload()
    })
    .catch(e => {
      console.log("Error", e)
    })
    //console.log(data)
  }

  onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log("e.target.value", value, name)
    this.setState({[name]: value, isChange: true})
    //this.setState({isChange: true})
  }

  descriptionHandler = (e) => {
    this.setState({description: e.target.value, isChange: true})
  }

  nameHandler = (e) => {
    this.setState({scuName: e.target.value, isChange: true})
  }

  onLoadProductPackShoot = (e) => {
    console.log(e.target.files[0])
    this.setState({fstPackshoot: e.target.files[0]})
  }

  onLoadFrontProductPackShoot = (e) => {
    console.log(e.target.files[0])
    this.setState({scndPackshoot: e.target.files[0]})
  }

  uploadPackShoot = () => {
    const {fstPackshoot, scndPackshoot} = this.state
    if (fstPackshoot && scndPackshoot) {

      const URI = PRODUCTS_API + "/upload/" + this.props.product.id
      const packshoot = new FormData()
      packshoot.append("scuId", this.props.product.scu_id)
      packshoot.append("packshootFrs", this.state.fstPackshoot)
      packshoot.append("packshootScnd", this.state.scndPackshoot)
      console.log("packshoot", this.props.product.packshoot)

      fetch(URI, {
        method: "POST",
        body: packshoot
      })
      .then(resp => {
        if (resp.status === 200) {
          alert("Файлы загруженны")
        } else {
          alert("Ошибка загрузки")
        }
      })
      .catch(e => {
        console.log("Error", e)
      })

    } else {
      alert("Должно быть загруженно два пекшота!")
    }
  }


  showChangeHandler = (e) => {
    console.log("---", e.target.value)
    this.setState({ isShow: e.target.value })
  }


  render() {
    const {product} = this.props
    const {description, scuName, brand, category, packageId, volume, country} = this.state
    //console.log("PRODUCT", product);
    return (
      <Card width="80%">
        {
           category == fv.category || brand == fv.brand || packageId == fv.packageId ||
           volume == fv.volume || country == fv.country || description.length < 2 ||
           scuName == "" || product.packshoot.length == 0 ?
           (<NotReady>Не готов</NotReady>)
           : (<Ready>Полность заполнен</Ready>)
        }
        <p>MD ID: {product.md_id} </p>
        <p><Input width="90%" type="text" value={this.state.scuName} name="scuName" onChange={this.nameHandler} /></p>
        <p>Цена {product.price_by_one} р. за единицу</p>
        <p>Колво на складе {product.stock} шт.</p>
        <div>
          <SelectBlock>
            <SelectLabel>Категория</SelectLabel>
            <Select onChange={this.onChangeHandler} name="category" >
              { this.props.generateOptionsCats(product.category_id) }
            </Select>
          </SelectBlock>

          <SelectBlock>
            <SelectLabel>Бренд</SelectLabel>
            <Select name="brand" onChange={this.onChangeHandler} >
              { this.props.generateOptionsBrand(product.brand_id) }
            </Select>
          </SelectBlock>

          <SelectBlock>
            <SelectLabel>Тип упаковки</SelectLabel>
            <Select name="packageId" onChange={this.onChangeHandler} >
              { this.props.generateOptionsPackages(product.package_id) }
            </Select>
          </SelectBlock>

          <SelectBlock>
            <SelectLabel>Страна</SelectLabel>
            <Select name="country" onChange={this.onChangeHandler} >
              { this.props.generateOptionsCountries(product.country_id) }
            </Select>
          </SelectBlock>

          <SelectBlock>
            <SelectLabel>Подкатегория</SelectLabel>
            <Select name="subcategory" onChange={this.onChangeHandler}>
              { this.props.generateOptionsSubCats(product.sub_category_id) }
            </Select>
          </SelectBlock>

          <SelectBlock>
            <SelectLabel>Объем</SelectLabel>
            <Select name="volume" onChange={this.onChangeHandler} >
              { this.props.generateOptionsVolumes(product.volume_id) }
            </Select>
          </SelectBlock>

          <SelectBlock>
            <SelectLabel>Тэг</SelectLabel>
            <Select name="tag" onChange={this.onChangeHandler} >
              { this.props.generateOptionsTags(product.tag_id) }
            </Select>
          </SelectBlock>
        </div>

        <div>
          <p>Описание</p>
          <TextBlock name="description" onChange={this.descriptionHandler} value={this.state.description} />
        </div>
        <p>
          <label>
            <input type="radio" value={true}
                   checked={this.state.isShow === "true"} onChange={this.showChangeHandler} />
            Показать на сайте
          </label>
          <label>
            <input type="radio" value={false}
                   checked={this.state.isShow === "false"} onChange={this.showChangeHandler} />
            Скрыть на сайте
          </label>
        </p>
        <button onClick={this.saveProductUpdate}>Сохранить</button>

        <div>
        <div>
          { product.packshoot.length > 0 ? (
            <>
              <Image bg={product.packshoot[0].url} />
              <Image bg={product.packshoot[0].hover} />
            </>
          ) : (
            <>
              <Image bg="/img/noimage.jpg" />
              <Image bg="/img/noimage.jpg" />
            </>
          ) }
        </div>

        <div>
          <label>Под углом пекшот</label>
          <Input type="file" onChange={this.onLoadProductPackShoot} />
        </div>

        <div>
          <label>Прямой пекшот</label>
          <Input type="file" onChange={this.onLoadFrontProductPackShoot} />
        </div>

        <div>
          <button onClick={() => {this.uploadPackShoot("1")}}>Загрузить пекшот</button>
        </div>
        </div>

      </Card>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem;
