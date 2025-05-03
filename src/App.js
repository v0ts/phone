import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import { ContactsList } from "./components/ContactsList/ContactsList.jsx";
import { ContactForm } from "./components/ContactForm/ContactForm.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  updateFilter = (filter) => {
    this.setState({ filter: filter });
  };

  addContact = (name, number) => {
    if (this.state.contacts.some((contact) => contact.name === name)) {
      alert(`${name} Вже є в ваших контактах`);
      return;
    }
    if (this.state.contacts.some((contact) => contact.number === number)) {
      alert(`${number} Вже є в ваших контактах`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className="App">
				<ContactForm addContact={this.addContact} />
        <ContactsList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
