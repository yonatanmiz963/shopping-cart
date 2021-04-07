
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const _AppHeader = (props) => {

    return (
       <div className="app-header flex space-between" >
           <div className="logo-wrapper flex">
            <h3>Shop</h3>
           </div>
            <ul className="header-nav flex justify-center align-center">
                <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
                <li class="shopping-cart"> <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon> <NavLink to="/cart" activeClassName="active-nav">Cart</NavLink></li>
            </ul>
        </div>
    )
}


export const AppHeader = withRouter(_AppHeader)
