
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'

const _AppHeader = (props) => {

    return (
       <div className="app-header flex space-between align-center" >
           <div className="logo-wrapper">
               <h3>Mister-bitCoin</h3>
           </div>
            <ul className="header-nav flex justify-center align-center">
                <li><NavLink to="/contact" activeClassName="active-nav">Contacts</NavLink></li>
                <li><NavLink to="/statistic" activeClassName="active-nav">Statistics</NavLink></li>
                <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
            </ul>
        </div>
    )
}


export const AppHeader = withRouter(_AppHeader)
