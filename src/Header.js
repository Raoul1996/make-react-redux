import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
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
    store.subscribe(()=>this._updateThemColor())
  }

  _updateThemColor() {
    const {store} = this.context
    const state = store.getState()
    this.setState({
      themColor: state.themColor
    })
  }

  render() {
    // const props = this.props
    const {themColor} = this.state
    return (
      <h1 className="header" style={{color: themColor}}>
        天道好轮回
      </h1>
    )
  }
}

export default Header