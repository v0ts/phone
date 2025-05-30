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
    const { contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} Вже є в ваших контактах`);
      return;
    }
    if (contacts.some((contact) => contact.number === number)) {
      alert(`${number} Вже є в ваших контактах`);
      return;
    }

    contacts.push({ id: nanoid(), name, number });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    this.setState({ contacts });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;

    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    this.setState({ contacts: updatedContacts });
  };

  filteredContacts = () => {
    const { filter } = this.state;
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (!contacts) {
      return [];
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (!contacts) {
      localStorage.setItem("contacts", JSON.stringify([]));
      return;
    }
    this.setState({ contacts: JSON.parse(contacts) });
  }

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
