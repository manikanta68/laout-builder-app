import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const content = event => {
        console.log(event.target.value)
        onToggleShowContent()
      }

      const leftNavbar = event => {
        console.log(event.target.value)
        onToggleShowLeftNavbar()
      }

      const rightNavbar = event => {
        console.log(event.target.value)
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-container">
          <h1>Layout</h1>
          <ul className="input-items-list">
            <li className="nav-items">
              <input
                onChange={content}
                value={showContent}
                type="checkbox"
                id="checkBox"
                defaultChecked={showContent}
              />
              <label className="label" htmlFor="checkBox">
                Content
              </label>
            </li>
            <li className="nav-items">
              <input
                onChange={leftNavbar}
                value={showLeftNavbar}
                type="checkbox"
                id="checkBox"
                defaultChecked={showLeftNavbar}
              />
              <label className="label" htmlFor="checkBox">
                Left Navbar
              </label>
            </li>
            <li className="nav-items">
              <input
                onChange={rightNavbar}
                value={showRightNavbar}
                type="checkbox"
                id="checkBox"
                defaultChecked={showRightNavbar}
              />
              <label className="label" htmlFor="checkBox">
                Right Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
