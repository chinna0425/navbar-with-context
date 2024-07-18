import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backColor = isDarkTheme
        ? 'darkaboutimage-container'
        : 'lightaboutimage-container'
      const titleColor = isDarkTheme ? 'darktitle-style' : 'lighttitle-style'
      const isImageChange = () => {
        if (isDarkTheme) {
          return 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        }
        return 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      }
      return (
        <div className="about-container">
          <Navbar />
          <div className={`${backColor}`}>
            <img src={isImageChange()} alt="about" className="about-image" />
            <h1 className={`${titleColor}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
