
import { Component } from 'react'

import './ItemList.scss'
import { ItemPreview } from '../ItemPreview'

export class ItemList extends Component {

    render() {
        const { items, onSelectItem } = this.props
        return (
            items && <div >
                <ul className="item-list flex">
                    {items.map(item => <li className="item-preview-li" key={item._id}><ItemPreview onSelectItem={onSelectItem} key={item._id} item={item} /></li>)}
                </ul>
            </div>
        )
    }
}
