
import { Component } from 'react'
import './ShoppingApp.scss'
import { ItemList } from '../../cmps/ItemList'
import { ItemFilter } from '../../cmps/ItemFilter'
import { itemService } from '../../services/itemService'
import { Link } from 'react-router-dom'


export class ShoppingApp extends Component {

    state = {
        items: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadItems()

    }

    componentWillUnmount() {

    }

    async loadItems() {
        const items = await itemService.getItems(this.state.filterBy)
        this.setState({ items })
    }


    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadItems)
    }

    onAddToCart = (item) => {
        itemService.addToCart(item);
    }

    render() {
        const { items, onSelectitem } = this.state
        if (!items) return <div>Loading...</div>
        return (
            <div className="item-page">
                <div className="filter-wrapper flex justify-center align-center">
                    <ItemFilter onFilter={this.onFilter} />
                </div>
                <ItemList onAddToCart={this.onAddToCart} onSelectitem={onSelectitem} items={items} />
            </div>
        )
    }
}
