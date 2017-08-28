import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // const props = this.props
    const {themeColor} = this.props
    return (
      <h1 className="header" style={{color: themeColor}}>
        天道好轮回
      </h1>
    )
  }
}

export default Header