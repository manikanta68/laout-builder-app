import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-menu">
              <h1 className="left-navbar-menu-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-menu-list-items">
                <li className="left-item">Item 1</li>
                <li className="left-item">Item 2</li>
                <li className="left-item">Item 3</li>
                <li className="left-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum sit Loram ipsum dollar sitLoram ipsum dollar
                sitLoram ipsum dollar sitLoram ipsum dollar sitLoram ipsum
                dollar sitLoram ipsum dollar sitLoram ipsum dollar sitLoram
                ipsum dollar sit
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar">
              <h1 className="right-navbar-heading">Right Navbar Menu</h1>
              <div className="right-navbar-items">
                <div className="right-item">
                  <p>Ad 1</p>
                </div>
                <div className="right-item">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
