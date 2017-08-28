import {connect} from '../react-redux'
import ThemSwitch from '../components/ThemSwitch'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({type: 'CHANGE_COLOR', themeColor: color})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemSwitch)