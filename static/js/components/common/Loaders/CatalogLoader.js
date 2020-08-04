import React from 'react'
import PropTypes from 'prop-types'

import './catalogLoader.css'

const CatalogLoader = (props) => {
  return (
    <div>
      <div className="blink-1 catalogLoaderProduct"></div>
      <div className="blink-2 catalogLoaderProduct"></div>
      <div className="blink-1 catalogLoaderProduct"></div>
      <div className="blink-2 catalogLoaderProduct"></div>
    </div>
  )
}

export default CatalogLoader
