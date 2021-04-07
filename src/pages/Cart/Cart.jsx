
import { Component } from 'react'
import { CartPreview } from '../../cmps/CartPreview/CartPreview'
import { ItemPreview } from '../../cmps/ItemPreview'
import { itemService } from '../../services/itemService'

export class Cart extends Component {

    state = {
        cartItems: null,
    }

    componentDidMount() {
        this.loadCartItems()
    }

    async loadCartItems() {
        const cartItems = await itemService.getCartItems()
        this.setState({ cartItems })
    }

    render() {
        const { cartItems } = this.state
        if (!cartItems) return <div>Loading...</div>
        return (
            <div className="cart-list-items">
                {/* {cartItems.map(item => <li className="item-preview-li" key={item._id}><ItemPreview key={item._id} item={item} /></li>)} */}
                {cartItems.map(item => <li className="cart-preview-li" key={item._id}><CartPreview key={item._id} item={item} /></li>)}
            </div>
        )
    }
}
