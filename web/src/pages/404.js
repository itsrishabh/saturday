import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import Container from '../components/layout'
import SEO from '../components/seo'

import Layout from '../containers/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <div className="inline-block w-full py-24 md:py-48 text-center">
        <div className="inline-block w-full max-w-3xl">
          <h1 className="text-2xl lg:text-5xl font-semibold mb-6">Nothing here...</h1>
          <h2 className="text-sm lg:text-xl text-gray-600">
            Go back to the home page please or wait till we build out the site in more details.
            Thanks!
          </h2>
          <Parallax className="inline-block w-full max-w-sm" y={[-10, 20]}>
            <img
              className="inline-block w-full"
              src="https://media.giphy.com/media/3o6fJ8bYYnCW95ST0A/giphy.gif"
            />
          </Parallax>
        </div>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
