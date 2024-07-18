import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheToggle = () => {
        toggleTheme()
      }
      const navlogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const backColor = isDarkTheme ? 'darknav-contianer' : 'lightnav-contianer'
      const listcolor = isDarkTheme ? 'listwhite' : null
      return (
        <nav className={`${backColor}`}>
          <div className="nav-inner-container">
            <img src={navlogo} alt="website logo" className="nav-logo" />
            <ul className="nav-unorder-container">
              <li>
                <Link to="/" className={`list-element ${listcolor}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`list-element ${listcolor}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              type="button"
              className="nav-button"
              onClick={changeTheToggle}
            >
              <img src={themeLogo} alt="theme" className="theme-logo" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
