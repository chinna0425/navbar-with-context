import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backColor = isDarkTheme
        ? 'darkhomeimage-container'
        : 'lighthomeimage-container'
      const isImageChange = () => {
        if (isDarkTheme) {
          return 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        }
        return 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      }
      const titleColor = isDarkTheme ? 'darktitle-style' : 'lighttitle-style'
      return (
        <div className="home-container">
          <Navbar />
          <div className={`${backColor}`}>
            <img src={isImageChange()} alt="home" className="home-image" />
            <h1 className={`${titleColor}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
