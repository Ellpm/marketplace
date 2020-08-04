import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SERVER_ADDR } from '../../../constans'
import { sendPostData } from '../../helpers'
import { Input } from '../styled'

const VOLUME_API = SERVER_ADDR + "api/volumes"

const Label = styled.label`
  display: block;
`

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

class AddVolume extends Component {

  state = {
    name: '0.5',
    id: '500',
  }

  nameInputHandler = (e) => {
    let id = e.target.value * 1000;
    this.setState({name: e.target.value, id: id})
  }


  addVolumeHandler = () => {
    const { name, id } = this.state;
    const volume = {
      volumeId: String(id),
      volumeName: name,
    }

    sendPostData(VOLUME_API, volume)
      .then(res => {
        if (res.status == 200) {
          alert("Объем создан")
          this.setState({name: "", id: ""})
          window.location.reload()
        } else {
          alert("Ошибка создания")
          this.setState({name: "", id: ""})
        }
      })
  }

  render() {
    const {name, id} = this.state;

    return (
      <Wrapper>
        <h3>Добавить объем</h3>
        <Label>Значение объема: {name}, id = {id}</Label>
        <Input type="number" step="0.1" value={name} onChange={this.nameInputHandler}  />
        <button onClick={this.addVolumeHandler}>Добавить</button>
      </Wrapper>
    )
  }
}

export default AddVolume
