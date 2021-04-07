
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../../services/contactService'
import Contact from '../../assets/imgs/contact.png'
import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state
        const { onClearSelected } = this.props
        if (!contact) return <div>Loading contact...</div>
        return (
            <div className="contact-details flex column justify-center align-center">
                <div className="btn-wrapper flex space-between align-center">
                    <Link to="/contact">Back</Link>
                    <Link to={'/contact/edit/' + contact._id}>Edit</Link>
                </div>
                <div className="details-wrapper">
                    {/* <img src={`https://robohash.org/${contact.name}`} alt="" /> */}
                    <img src={Contact} alt="contact" />
                    <h2 className="name">Name: {contact.name}</h2>
                    <h3 className="phone">Phone: {contact.phone}</h3>
                    <h3 className="email">Email: {contact.email}</h3>
                </div>
            </div>
        )
    }
}
