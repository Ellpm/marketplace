import React, { Component  } from 'react'
import PropTypes from 'prop-types'

import { sections } from './sections'
import SectionElem from './SectionsElem'
import { SectionWrapper } from './styled'

export class SectionList extends Component { // eslint-disable-line react/prefer-stateless-function



  renderSections = () => {
    const { selectSectionId } = this.props
    const result = sections.map(item => {
      const isSelect = selectSectionId === item.id
      return(
        <SectionElem
          key={item.id}
          elem={item}
          isSelect={isSelect}
        />
      )
    })
    return result
  }

  render() {
    return (
      <SectionWrapper>
        {this.renderSections()}
      </SectionWrapper>
    );
  }
}

SectionList.propTypes = {
  selectSectionId: PropTypes.string.isRequired
}

export default SectionList;
