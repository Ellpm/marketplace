import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
`

const Card = styled.div`
  width: 600px;
  height: 300px;
  background: url('/img/common/bank.jpg') no-repeat;
  background-size: contain;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`

const BtnBlock = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`

const Link = styled.a`
  display: inline-block;
  width: 150px;
  height: 25px;
  background: green;
  color: white !important;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  padding-top: 7px;
  border-radius: 5px;
`

const SumulateBank = (props) => {
  return (
    <Wrapper>
      <Card />
      <BtnBlock>
        <Link href='/successpaid'>Оплатить</Link>
      </BtnBlock>
    </Wrapper>
  )
}

export default SumulateBank
