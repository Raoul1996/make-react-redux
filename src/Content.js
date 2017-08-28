import React, {Component} from 'react'
import ThemSwitch from './ThemSwitch'
import PropTypes from 'prop-types'

class Content extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {themColor: ''}
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

  render() {
    const {themColor} = this.state
    return (
      <div className="content" style={{color: themColor}}>
        苍天饶过谁
        <ThemSwitch/>
      </div>
    )
  }
}

export default Content