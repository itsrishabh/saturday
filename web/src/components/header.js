import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
