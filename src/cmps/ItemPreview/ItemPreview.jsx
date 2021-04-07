
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './ItemPreview.scss'

export class ItemPreview extends Component {
    render() {
        const { item } = this.props
        return (
            <Link to={'/item/' + item._id}>
                <div className="item-preview flex align-center">
                    <img src={item.image} alt="item" />
                    <h3>{item.title}</h3>
                    <h3>{item.price}</h3>
                    <h3>{item.description}</h3>
                    <h3>{item.category}</h3>
                </div>
            </Link>
        )
    }
}
