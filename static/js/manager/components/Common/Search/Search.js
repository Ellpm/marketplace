import React, { Component } from 'react';

import { Input } from '../../../kit/styled/controls'
import { SearchBlock } from './styled'

class Search extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SearchBlock>
        <Input placeholder="Поиск" />
      </SearchBlock>
    );
  }
}

export default Search;
