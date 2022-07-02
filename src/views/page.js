import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - exported project</title>
        <meta property="og:title" content="Page - exported project" />
      </Helmet>
      <img
        src="https://images.unsplash.com/photo-1656764984949-0fdeee140246?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY1Njc3NjI5MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=200"
        alt="image"
        className="page-image"
      />
      <video
        src
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="page-video"
      ></video>
      <iframe
        src="https://www.youtube.com/embed/DeQkMK5LME4"
        className="page-iframe"
      ></iframe>
      <form className="page-form"></form>
      <img
        src="https://images.unsplash.com/photo-1656769567682-4b4162ee5a44?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY1Njc3NjI5MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=200"
        alt="image"
        className="page-image1"
      />
    </div>
  )
}

export default Page
