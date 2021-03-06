import MenuComponent from '../components/MenuComponent.jsx'
import React from 'react'
import { connect } from 'react-redux'
import { toggle_menu_visible } from '../actions/ui.js'
import { withRouter } from 'react-router'
import { user_logout } from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
  const menu = state.ui.menu
  return {
    visible: menu.visible,
    items: ownProps.items,
    brand: ownProps.brand

  }
}

let  mapDispatchToProps = (dispatch, ownProps) => {
    return {
	onMenuVisibleToggle: e => { dispatch(toggle_menu_visible()) },
        onLogoutClick: () => dispatch(user_logout())
    }
}


const MenuContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)(MenuComponent))

export default MenuContainer
