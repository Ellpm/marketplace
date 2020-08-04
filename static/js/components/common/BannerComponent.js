import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import ReactSwipe from 'react-swipe';

import {theme} from '../kit/theme';
import {Grid, Row, Col} from '../kit/Grid';

const Banner = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${props => props.height || '360px'};
  background: ${props => props.theme.color.green};
  position: relative;
  @media (max-width: ${theme.sizes.mobileL}) {

  }
`

export const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 20px;
  }
`

const Slogan = styled.h1`
  font-size: calc(1em + 4vw);
  line-height: 1em;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 40px;
  @media (max-width: ${theme.sizes.mobileL}) {
    font-size: calc(1em + 5vw);
    position: absolute;
    top: 0;
    z-index: 100;
    margin-top: 15px;
  }
`
const White = styled.span`
  color: ${props => props.theme.color.white};
  display: inline;
  @media (max-width: ${theme.sizes.mobileL}) {
    background: ${props => props.theme.color.green};
  }
`

const Black = styled.span`
  color: ${props => props.theme.color.black} !important;
  display: inline;
  @media (max-width: ${theme.sizes.mobileL}) {
    background: ${props => props.theme.color.green};
  }
`

const SubSlogan = styled.h3`
  font-size: calc(1em + 1vw);
  margin-top: 40px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-top: 40px;
    font-size: calc(1em + 1vw);
    position: absolute;
    top: 57px;
    z-index: 100;
  }
`

const Image = styled.div`
  height: 360px;
  background: url(${props => props.image || '/img/common/banner1.png'}) no-repeat;
  background-size: contain;
  background-position: right bottom;
  margin-left: 1%;
  @media (max-width: ${theme.sizes.mobileL}) {
    position: absolute;
    bottom: 0;
    left: 68px;
    width: 66%;
    height: 300px;
  }
`

const Column = styled.div`
  display: inline-block;
  width: 49%;
  vertical-align: top;
  @media (max-width: ${theme.sizes.mobileL}) {
    display: block;
    width: 100%;
  }
`

const InnerWrapper = styled.div`
  padding-left: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    padding-left: 20px;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  margin-top: -25px;
  width: 50px;
  height: 50px;
  background: url('/img/common/arrow1.svg') no-repeat;
  opacity: 0.6;
  :hover {
    opacity: 0.9;
  }
`

const ArrowBack = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  margin-top: -25px;
  width: 50px;
  height: 50px;
  background: url('/img/common/arrow2.svg') no-repeat;
  opacity: 0.6;
  :hover {
    opacity: 0.9;
  }
`

const Link = styled.a`
  color: ${props => props.theme.color.black} !important;
  display: block;
`

const BannerComponent = (props) => {
  let reactSwipeEl;
  return (
    <ThemeProvider theme={theme}>
      <div style={{position: 'relative'}}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          <Banner>
            <Column>
              <InnerWrapper>
                <Slogan>Бери упаковками - <White>экономь 20%</White></Slogan>
                <div>
                  <SubSlogan><Black></Black></SubSlogan>
                </div>
              </InnerWrapper>
            </Column>
            <Column>
              <Image image="/img/common/banner1.png" />
            </Column>
          </Banner>

          {/*<Banner>
            <Link href="/catalog/2/eenergeticheskij-napitok/gorilla-0,45---24-zh-ban-novaya">
            <Column>
              <InnerWrapper>
                <Slogan>Gorilla Energy <White>выгоднее на 20%</White></Slogan>
              </InnerWrapper>
            </Column>
            <Column>
              <Image image="/img/common/gorilla5.png" />
            </Column>
            </Link>
          </Banner>*/}

        </ReactSwipe>
        {/*<Arrow icon="/img/common/arrow1.svg" onClick={() => reactSwipeEl.prev()} />
      <ArrowBack icon="/img/common/arrow2.svg" onClick={() => reactSwipeEl.next()} />*/}

    </div>
    </ThemeProvider>
  )
}

BannerComponent.propsTypes = {

}

export default BannerComponent
