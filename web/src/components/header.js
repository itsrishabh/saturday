import React from 'react'
import { Link } from 'gatsby'

const classMenuButton =
  'inline-block md:hidden bg-transparent border-none relative w-auto text-sm font-medium'
const classMobile = 'inline-block relative w-full text-2xl py-12'
const classLinks =
  'inline-block align-middle w-full md:w-auto py-2 md:py-0 mx-0 md:mx-2 text-left md:text-right font-medium link'

const Header = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      isTop: true
    }

    this.isTopChecker = this.isTopChecker.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  isTopChecker() {
    const isTop = window.scrollY < 50
    if (isTop !== this.state.isTop) {
      this.setState({ isTop })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.isTopChecker)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isTopChecker)
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      })
    }
  }

  render() {
    const { company } = this.props

    const Logo = () => (
      <Link className="inline-block primary font-semibold link" title={company} to="/">
        <img
          className="inline-block align-middle mr-4 w-6 lg:w-8"
          alt={company}
          src="/logo.svg"
        />
        <strong className="hidden md:inline-block align-middle">
          Saturday
        </strong>
      </Link>
    )

    const RightNav = () => (
      <div className="inline-block w-full md:w-auto relative">
        <Link className={`${classLinks} mr-0 md:mr-4`} to="/why">
          Why
        </Link>
        <Link className={`${classLinks} mr-0`} to="/who">
          Who
        </Link>
      </div>
    )

    const CloseButton = () => (
      <button className={classMenuButton} onClick={this.closeMenu}>
        Close
      </button>
    )

    const MenuButton = () => (
      <button className={classMenuButton} onClick={this.toggleMenu}>
        Menu
      </button>
    )

    return (
      <nav
        aria-label="main-navigation"
        className={`navbar inline-block fixed w-full left-0 top-0 z-20 border-none ${
          this.state.isTop ? `py-8` : `py-4 md:py-6`
        }`}
        role="navigation"
      >
        {/* Mobile nav */}
        <div
          className={`mobile inline-block fixed overflow-y-auto overflow-x-hidden bg-black text-center left-0 top-0 w-full h-screen px-5 py-4 z-30 ${
            this.state.menuOpen ? `open` : ``
          }`}
        >
          <div className="flex items-center justify-between md:hidden w-full mb-5">
            <Logo />
            <div className="inline-block md:hidden text-right">
              <CloseButton />
            </div>
          </div>
          <div className={classMobile}>
            <RightNav />
          </div>
        </div>
        {/* Non-Mobile nav */}
        <div className={`container mx-auto px-5`}>
          <div className="flex items-center justify-center flex-wrap">
            {/* Left */}
            <Logo />
            {/* Right */}
            {/* <div className="hidden md:inline-block text-right">
              <RightNav />
            </div> */}
            {/* Menu */}
            {/* <div className="inline-block md:hidden relative">
              <MenuButton />
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Header