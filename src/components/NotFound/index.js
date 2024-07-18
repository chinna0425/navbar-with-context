import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const backColor = isDarkTheme
        ? 'darknotfoundimage-container'
        : 'lightnotfoundimage-container'
      const titleColor = isDarkTheme
        ? 'darknotfoundtitle-style'
        : 'lightnotfoundtitle-style'
      return (
        <div className="notfound-container ">
          <Navbar />
          <div className={`${backColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-image"
            />
            <h1 className={`${titleColor}`}>Lost Your Way?</h1>
            <p className="notfound-description">
              We Cannot Seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
