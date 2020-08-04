import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const Link = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: ${props => props.theme.color.darkGray};
  position: relative;
  :after{
    content: ">";
    text-decoration: none;
    position: absolute;
    margin-left: 5px;
  }
`

const Brand = styled.span`
  display: inline-block;
  color: ${props => props.theme.color.green};
`

const BreadCrumbs = (props) => {

  const cat_href = '/catalog/' + props.categoryId;
  const subcat_href = cat_href + '/byTag/' + props.subcategoryId;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Link href={cat_href}>{props.categoryName}</Link>
        <Link href={subcat_href}>{props.subcategoryName}</Link>
        <Brand>{props.brandName}</Brand>
      </Wrapper>
    </ThemeProvider>
  )
}

export default BreadCrumbs
