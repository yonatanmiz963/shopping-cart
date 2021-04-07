
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';

const _AppHeader = (props) => {

    return (
        <div className="app-header" >
            <div className="header-nav">
                <div className="home-wrapper"><NavLink exact to="/" activeClassName="active-nav"><HomeIcon></HomeIcon></NavLink>
                    <div>
                        <p>ABOUT US</p>
                    </div>
                    <div>
                        <p>CONTACT US</p>
                    </div>
                </div>
                <div className="cart-wrapper"> <NavLink to="/cart" activeClassName="active-nav"> <ShoppingCartOutlinedIcon className="cart-icon"></ShoppingCartOutlinedIcon> {props.cartCount} ITEM(S)</NavLink></div>
            </div>
        </div>
    )
}


export const AppHeader = withRouter(_AppHeader)
