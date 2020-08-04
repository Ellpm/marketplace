import React, { Component } from 'react';

import { theme } from '../../../kit/theme'
import { H1 } from '../../../kit/styled'
import { Button } from '../../../kit/styled/controls'
import { CreationBlock, CreationBtn } from '../styled'
import CreateModal from './CreateModal'

export class PromoCreator extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    isOpen: false
  }

  toogleModal = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <CreationBlock>
        <H1>
          Новый промокод
        </H1>
        <CreationBtn>
          <Button
            background={theme.colors.white}
            border={ `1px solid ${theme.colors.green}` }
            color={theme.colors.green}
            onClick={this.toogleModal}
          >
            Создать
          </Button>
        </CreationBtn>
        <CreateModal
          isOpen={this.state.isOpen}
          close={this.toogleModal}
        />
      </CreationBlock>
    );
  }
}


export default PromoCreator;
