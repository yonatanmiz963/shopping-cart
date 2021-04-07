
import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import { userService } from '../../services/userService'
import Coins from '../../assets/imgs/coins.png';
import Bitcoin from '../../assets/imgs/bitcoin.png';
import './HomePage.scss'

export class HomePage extends Component {

    state = {
        user: null,
        currRate: null,
    }

    componentDidMount() {
        this.loadUser()
        this.getCurrRate()
    }

    componentWillUnmount() {

    }

    async getCurrRate() {
        const currRate = await bitcoinService.getRate()
        this.setState({ currRate })
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
    }

    render() {
        const { user, currRate } = this.state
        return (
            user && currRate && <div className="home-page flex column align-start">
                <div className="username-wrapper">
                    <h2>Hello {user.name}</h2>
                </div>
                <div>
                    <div className="coins-wrapper flex align-center">
                        <img src={Coins} alt="coins" />
                        <h2>Coins: ${user.coins}</h2>
                    </div>
                </div>
                <div className="flex align-center">
                    <img src={Bitcoin} alt="bitcoin" />
                    <h2>BTC: {currRate}</h2>
                </div>
            </div>
        )
    }
}
