import React from 'react'

import { Helmet } from 'react-helmet'

import './h-e-l-l-o.css'

const HELLO = (props) => {
  return (
    <div className="h-e-l-l-o-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="h-e-l-l-o-frame1">
        <img
          alt="image11569"
          src="/playground_assets/f4f26b67-a546-45e0-9e12-f5962a432976-qky-900w.png"
          className="h-e-l-l-o-image"
        />
      </div>
    </div>
  )
}

export default HELLO
