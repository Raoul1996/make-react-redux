import React, {Component} from 'react'
import PropTypes from 'prop-types'

// const mapStateToProps = (state) => {
//   return {
//     themeColor: state.themeColor,
//     themName: state.themName,
//     fullName: `${state.firstName} ${state.lastName}`
//   }
// }
export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }
  render() {
    const {children} = this.props
    return (
      <div>{children}</div>
    )
  }
}

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor(props) {
      super(props)
      this.state = {
        allProps: {}
      }
    }

    componentWillMount() {
      const {store} = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps() {
      const {store} = this.context
      let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render() {
      const {allProps} = this.state
      return <WrappedComponent {...allProps}/>
    }
  }

  return Connect
}
