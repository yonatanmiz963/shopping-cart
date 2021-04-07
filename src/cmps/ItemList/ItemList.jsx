
import { Component } from 'react'

import './ItemList.scss'
import { ItemPreview } from '../ItemPreview'

export class ItemList extends Component {

    render() {
        const { items, onSelectItem, onAddToCart } = this.props
        return (
            items && <div className="list-container" >
                <ul className="item-list flex">
                    {items.map(item => <li className="item-preview-li" key={item._id}><ItemPreview onAddToCart={onAddToCart} onSelectItem={onSelectItem} key={item._id} item={item} /></li>)}
                </ul>
            </div>
        )
    }
}


