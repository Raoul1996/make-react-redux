import React, {Component} from 'react'
import PropTypes from 'prop-types'
class ThemSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {}
    // this.handleSwitchColor = this.handleSwitchColor.bind(this)
  }

  handleSwitchColor(color) {
    const {onSwitchColor} = this.props
    if (onSwitchColor) {
      onSwitchColor(color)
    }
  }

  render() {
    const {themeColor} = this.props
    return (
      <div className="them-switch">
        <button style={{color: themeColor}} onClick={() => this.handleSwitchColor('red')}>Red</button>
        <button style={{color: themeColor}} onClick={() => this.handleSwitchColor('blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemSwitch