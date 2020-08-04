import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {theme} from '../../components/kit/theme'

const Logo = styled.div`
  height: 70px;
  width: 300px;
  background: url('/img/logo/newWhiteLogo.svg') no-repeat;
  background-size: 100%;

  @media (max-width: ${theme.sizes.laptop}) {
    height: 70px;
    width: 250px;
  }

  @media (max-width: ${theme.sizes.mobileL}) {
    height: 50px;
    width: 220px;
  }
`

const LogoComponent = (props) => {
  return (
    <div>
        <a href="/"><Logo></Logo></a>
    </div>
  )
}

LogoComponent.propsTypes = {
  link: PropTypes.string
}

export default LogoComponent
