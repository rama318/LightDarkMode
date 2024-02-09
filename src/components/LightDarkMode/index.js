import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onModeButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const buttonText = isDark ? 'LighT Mode' : 'Dark Mode'
    const buttonClassName = isDark ? 'dark-mode' : 'light-mode'

    return (
      <div className="app-container">
        <div className={`${buttonClassName} container`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button
            type="button"
            className="mode-button"
            onClick={this.onModeButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
