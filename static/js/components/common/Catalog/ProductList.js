import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProductCardComponent from './ProductCardComponent'
import { isInBasket } from '../../../helpers/localStorage'
 

function sortByPriceLow(arr) {
  arr.sort((a, b) => +a.price_by_one > +b.price_by_one ? 1 : -1)
}

function sortByPriceUp(arr) {
  arr.sort((a, b) => +a.price_by_one < +b.price_by_one ? 1 : -1)
}


const ProductWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const Select = styled.select`
  border: 0;
  display: inline-block;
`

const Selector = styled.div`
  text-align: left;
  padding-left: 20px;
  margin-top: -20px;
  margin-bottom: 10px;
`

const Span = styled.span`
  font-size: 14px;
`

class ProductList extends Component {

  state = {
    products: [],
    test: "123"
  }

  componentDidMount() {
    const {products} = this.props
    this.setState({products: this.prepareProducts(products)})
  }

  prepareProducts = (arr) => {
    const result = arr.filter(item => {
      let price_by_one = (item.price_by_one*1).toFixed(2)
      item.price = (price_by_one * item.pack_quantity).toFixed(2)
      if (item.isshow && item.stock*1 > 0) {
        return item
      }
    })
    return result;
  }

  renderProducts = () => {
    const {products} = this.state
    const result = products.map(item => {
        return(
          <ProductCardComponent
            product={item}
            isInBasket={isInBasket(item)}
            key={item.scu_id}
          />
        )
    })
    return result
  }

  sortChangeHandler = (e) => {
    const type = e.target.value
    const result = this.state.products;

    switch(type) {
      case 'low':
        console.log("LOW")
        sortByPriceLow(result)
        console.log(result)
        this.setState({products: result})
        break

      case "high":
        console.log("HIGH")
        sortByPriceUp(result)
        console.log(result)
        this.setState({products: result})
        break
      case "haha":
        const {products} = this.props
        this.setState({products: this.prepareProducts(products)})
        break;

      default:
        break
    }

  }

  render() {
    return (
      <>
      <ProductWrapper>
        <Selector>
          <Span>Сортировать: </Span>
          <Select onChange={this.sortChangeHandler}>
            <option value="haha">По бренду</option>
            <option value="low">Сначала дешевые</option>
            <option value="high">Сначала дорогие</option>
          </Select>
        </Selector>
        <div>
          {this.renderProducts()}
        </div>
        </ProductWrapper>
      </>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList
