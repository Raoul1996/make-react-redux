import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Header from './Header'
import Content from './Content'

function createStore(reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({})
  return {getState, dispatch, subscribe}
}

const themReducer = (state, action) => {
  if (!state) {
    return {
      themColor: 'red'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themColor: action.themColor}
    default:
      return state
  }
}
const store = createStore(themReducer)

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {store}
  }

  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default App
