import React, {Component} from 'react'
import ThemSwitch from './ThemSwitch'
import PropTypes from 'prop-types'
import {connect} from '../react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {themeColor: ''}
  }

  render() {
    const {themeColor} = this.props
    return (
      <div className="content" style={{color: themeColor}}>
        苍天饶过谁
        <ThemSwitch/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {themeColor: state.themeColor}
}
Content = connect(mapStateToProps)(Content)
export default Content