import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getLlegalInfoByKeyname, getLlegalInfo, updateLlegalDataByKey } from './AC'
import LlegalItem from './LlegalItem'

/**
 * LlegalList
 */
class LlegalList extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.getLlegalInfo()
  }

  render() {
    console.log("------------", this.props.llegalData)
    const { llegalData } = this.props
    if (llegalData.loading) return <h1>Загрузка</h1>

    return (
      <>
        { llegalData.loaded ? (
          <div>
            { llegalData.entitys.map(item => {
                return(
                  <LlegalItem item={item} key={item.id} />
                )
            }) }
          </div>
        ) : (
          <></>
        ) }
      </>
    );
  }
}

LlegalList.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default connect((state) => {
  return {
    llegalData: state.adminLlegalData
  }
}, { getLlegalInfoByKeyname, getLlegalInfo, updateLlegalDataByKey })(LlegalList);
