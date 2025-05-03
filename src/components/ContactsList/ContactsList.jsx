import { Component } from "react";
import { ContactsItem } from "../ContacsItem/ContactsItem";

export class ContactsList extends Component {
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map((el) => (
            <ContactsItem
              contact={el}
              deleteContact={this.props.deleteContact}
							key={el.id}
            />
          ))}
        </ul>
      </>
    );
  }
}
