import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import {fakeMenu} from '../../fakeData/fakeMenu'

import {theme} from '../../components/kit/theme'
import {Grid, Row, Col, Wrapper} from '../../components/kit/Grid'
import ButtonComponent from '../../components/common/ButtonComponent'

const PromoMenu = styled.div`
  margin-top: 60px;
  margin-bottom: 90px;
  text-align: center;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 7%;
    margin-right: 10%;
    min-width: 100%;
    min-height: 250px;
    display: flex;
    overflow-x: auto;
    padding-left: 50px;
    margin-left: -30px;
  }
`;

const MenuBlock = styled.div`
  margin-right: 60px;
  background: ${props => props.theme.color.gray};
  min-height: 350px;
  display: inline-block;
  width: 25%;
  min-width: 250px;
  margin-bottom: 30px;
  position: relative;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-bottom: 30px;
    margin-right: 40px;
    min-width: 250px;
    padding-left: 10px;
  }
`;

const MenuWrapper = styled.div`
  padding: 20px;
`;

const MenuLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.green};
  text-decoration: none;
  padding: 5px;
  padding-rignt: 10px;
  padding-left: 10px;
  border-radius: 3px;
  margin-left: 60px;
  width: 145px;
  font-size: 14px;
  text-align: center;
`;

const MenuList = styled.div`
  margin-left: 12px;
  height: 300px;
  display: inline-block;
  width: 45%;
  margin-left: 40%;
  vertical-align: top;
  text-align: left;
  position: relative;
`

const MenuHeader = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`

const MenuItem = styled.a`
  display: block;
  color: ${props => props.theme.color.black};
  font-size: 14px;
  margin-bottom: 7px;
`

const PromoBanner = styled.div`
  height: 80%;
  min-height: 230px;
  background: url(${props => props.banner}) no-repeat;
  background-size: cover;
  margin-left: -65px;
  display: inline-block;
  width: 59%;
  position: absolute;
  vertical-align: top;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: -50px;
  }
`

const generatePromoMenu = (arr) => {
  const result = arr.map(item => {
  const href = '/catalog/' + item.itemId;

  return(
      <MenuBlock>
        <PromoBanner banner={item.promoBanner}></PromoBanner>
        <MenuList>
            <MenuHeader>{item.itemName}</MenuHeader>
            {
              item.subCategoryes.map(point => {
                let link = point.itemId
                if (point.itemId == 'craft') {
                  link = '/catalog/pivo/byTag/craft'
                }
                return(
                  <MenuItem href={link}>{point.name}</MenuItem>
                )
              })
            }
          </MenuList>
          <MenuLink href={href}>
            {item.showItemName}
          </MenuLink>
        </MenuBlock>
    )
  })
  return result
}

const PromoMenuBlock = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
      <PromoMenu>
        {generatePromoMenu(fakeMenu)}
      </PromoMenu>
      </div>
    </ThemeProvider>
  )
}

export default PromoMenuBlock
