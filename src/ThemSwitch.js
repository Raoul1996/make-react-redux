import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {themColor: ''}
    // this.handleSwitchColor = this.handleSwitchColor.bind(this)
  }

  componentWillMount() {
    const {store} = this.context
    this._updateThemColor()
    store.subscribe(() => this._updateThemColor())
  }

  _updateThemColor() {
    const {store} = this.context
    const state = store.getState()
    this.setState({
      themColor: state.themColor
    })
  }

  handleSwitchColor(color) {
    const {store} = this.context
    console.log(color)
    store.dispatch({
      type: 'CHANGE_COLOR',
      themColor: color
    })
  }

  render() {
    const {themColor} = this.state
    return (
      <div className="them-switch">
        <button style={{color: themColor}} onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button style={{color: themColor}} onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemSwitch