import React from 'react'

import { Helmet } from 'react-helmet'

import './frame1.css'

const Frame1 = (props) => {
  return (
    <div className="frame1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame1-frame1">
        <img
          alt="image11569"
          src="/playground_assets/f4f26b67-a546-45e0-9e12-f5962a432976-qky-900w.png"
          className="frame1-image"
        />
      </div>
    </div>
  )
}

export default Frame1
