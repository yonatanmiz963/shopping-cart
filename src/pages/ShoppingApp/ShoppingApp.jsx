
import { Component } from 'react'
import './ShoppingApp.scss'
import { ItemList } from '../../cmps/ItemList'
import { ItemFilter } from '../../cmps/ItemFilter'
import { itemService } from '../../services/itemService'
import { Link } from 'react-router-dom'


export class ShoppingApp extends Component {

    state = {
        items: null,
        filterBy: null,
        page: 1,
        itemsPerPage: 6
    }

    componentDidMount() {
        this.loadItems()

    }

    componentWillUnmount() {

    }

    async loadItems() {
        var items = await itemService.getItems(this.state.filterBy)
        var itemCopy = [...items]
        console.log('page:', (this.state.itemsPerPage * this.state.page) - 6)
        console.log('page:', this.state.itemsPerPage * this.state.page)
        const itemsToShow=itemCopy.splice((this.state.itemsPerPage * this.state.page) - 6, this.state.itemsPerPage * this.state.page)
        console.log('items:', items)
        console.log('itemsToShow:', itemsToShow)
        this.setState({ items: itemsToShow })
    }


    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadItems)
    }

    onAddToCart = (item) => {
        itemService.addToCart(item);
    }

    nextPage = () => {
        this.setState(prevState => ({ page: ++prevState.page }), this.loadItems)
    }
    prevPage = () => {
        this.setState(prevState => ({ page: --prevState.page }), this.loadItems)
    }

    render() {
        const { items, onSelectitem } = this.state
        if (!items) return <div>Loading...</div>
        return (
            <div className="item-page">
                <div className="filter-wrapper flex justify-center align-center">
                    <ItemFilter onFilter={this.onFilter} />
                    <Link className="add-btn" to="/item/edit">Add item</Link>
                </div>
                <ItemList onAddToCart={this.onAddToCart} onSelectitem={onSelectitem} items={items} />
                <button onClick={this.prevPage}>Previous Page</button>
                {this.state.page}
                <button onClick={this.nextPage}>Next Page</button>
            </div>
        )
    }
}
