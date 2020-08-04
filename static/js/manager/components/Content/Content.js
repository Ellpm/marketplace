import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Block, H1 } from '../../kit/styled'
import LlegalList from './Llegal/LlegalList'

class ContentBlock extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Block>
        <LlegalList />
      </Block>
    );
  }
}

ContentBlock.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default ContentBlock;
