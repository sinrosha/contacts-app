import React from "react";

class ContactList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <ol>
                {this.props.contacts.map( contact => (
                    <li key={contact.id} className="contact-list-item">
                        <div 
                            className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove">
                            remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ContactList;