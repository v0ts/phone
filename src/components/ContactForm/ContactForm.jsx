import { Component } from "react";

export class ContactForm extends Component {
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.currentTarget.elements.inputName.value;
            const number = e.currentTarget.elements.inputNumber.value;
            this.props.addContact(name, number);
						e.currentTarget.reset()
          }}
        >
          <ul>
            <li>
              <label htmlFor="inputName">Name </label>
              <input type="text" name="inputName" id="inputName" />
            </li>
            <li>
              <label htmlFor="inputNumber">Number </label>
              <input type="text" name="inputNumber" id="inputNumber" />
            </li>
          </ul>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
