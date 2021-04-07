
import { Component } from 'react'
import './ContactPage.scss'
import { ContactList } from '../../components/ContactList'
import { ContactFilter } from '../../components/ContactFilter'
import { contactService } from '../../services/contactService'
import { Link } from 'react-router-dom'


export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadContacts()

    }

    componentWillUnmount() {

    }

    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }


    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts, onSelectContact } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <div className="contact-page">
                <div className="filter-wrapper flex justify-center align-center">
                    <ContactFilter onFilter={this.onFilter} />
                    <Link className="add-btn" to="/contact/edit">Add Contact</Link>
                </div>
                <ContactList onSelectContact={onSelectContact} contacts={contacts} />
            </div>
        )
    }
}
