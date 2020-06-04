import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { initGA, logPageView } from '../utils/analytics'

import Header from './header'
import Footer from './footer'

import '../styles/all.sass'

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { bgImage, children, companyInfo, siteTitle } = this.props

    return (
      <>
        <Header siteTitle={siteTitle} />
        <ParallaxProvider>{children}</ParallaxProvider>
        {/* <Footer
          country={companyInfo.country}
          company={companyInfo.name}
          email={companyInfo.email}
          city={companyInfo.city}
        /> */}
        {bgImage ? (
          <div
            className="background-image inline-block fixed bottom-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover'
            }}
          ></div>
        ) : null}
      </>
    )
  }
}

export default Layout
