import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import './App.css'
import Header from './Header'
import Content from './Content'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor}
    default:
      return state
  }
}
const store = createStore(themeReducer)

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
registerServiceWorker()
