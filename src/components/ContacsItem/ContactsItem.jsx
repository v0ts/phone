import { Component } from "react";

export class ContactsItem extends Component {
  render() {
    return (
      <>
        <li>
          <p>
            {this.props.contact.name}: {this.props.contact.number}
          </p>
          <button
            type="button"
            onClick={() => {
              this.props.deleteContact(this.props.contact.id);
            }}
          >Delete</button>
        </li>
      </>
    );
  }
}
