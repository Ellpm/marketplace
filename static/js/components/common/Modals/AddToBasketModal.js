import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';

import CardProductItem from '../Cart/CardProductItemComponent'

const AddToBasketModalStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: 50
  },
  content : {
    bottom                : '1px',
    right                 : '1px',
    left                 : 'auto',
    top                : 'auto',
    width                 : '700px',
    border                : '0',
    height               : '200px',
  }
};

const AddToBasketModal = (props) => {
  const {product} = props;
  let packshootUrl;
  try {
      packshootUrl = product.packshoot[0] ? product.packshoot[0].url : '/img/noimage.jpg'
  } catch(e) {
    packshootUrl = '/img/noimage.jpg'
  }

  //console.log("!!!!", product)
  return (
    <Modal
      isOpen={props.isOpen}
      style={AddToBasketModalStyles}
      onRequestClose={props.close}
    >
      <div>
        <h2>Товар добавлен в резерв</h2>
        <CardProductItem
          scuName={product.scu_name}
          scuId={product.scu_id}
          packshoot={packshootUrl}
          price={product.price}
          pricePerUnit={product.price}
          sale={product.sale}
          discountPrice={product.discount_price}
          stock={product.stock}
          mdId={product.md_id}
          total={product.price}
          quantity="1"
        />
      </div>
    </Modal>
  )
}

export default AddToBasketModal
