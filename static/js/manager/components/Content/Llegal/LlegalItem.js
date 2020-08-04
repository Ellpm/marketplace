import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateLlegalDataByKey } from './AC'
import { Input, TextArea, Button } from '../../../kit/styled/controls'
import { Label } from '../../../kit/styled'

/**
 * LlegalItem
 */
class LlegalItem extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    keyname: this.props.item.keyname,
    showname: this.props.item.showname,
    description: this.props.item.description
  }

  componentDidMount() {

  }

  inputChangeHandler = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  saveBtnHandler = (e) => {
    const data = {
      keyname: this.state.keyname,
      showname: this.state.showname,
      description: this.state.description
    }

    this.props.updateLlegalDataByKey(data)
    window.location.reload()
  }

  render() {
    const { showname, description } = this.state
    const { llegalData } = this.props

    return (
      <div>
        { llegalData.updateLoading ? (<p>Сохраняется</p>) : (<></>) }
        { llegalData.isUpdated ? (<p>Сохранено</p>) : (<></>) }
        <Label>Название (отображается в ссылке в подвале)</Label>
        <Input
          type="text"
          value={showname}
          marginBottom="5px;"
          name="showname"
          onChange={this.inputChangeHandler}
        />
        <Label>Текст</Label>
        <TextArea
          value={description}
          height="200px"
          onChange={this.inputChangeHandler}
          name="description"
        />
        <Button
          marginBottom="30px"
          onClick={this.saveBtnHandler}
        >Сохранить</Button>
      </div>
    );
  }
}

LlegalItem.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default connect((state) => {
  return {
    llegalData: state.adminLlegalData
  }
}, { updateLlegalDataByKey })(LlegalItem);
