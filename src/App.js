import React from 'react';
import ContactForm from './Phonebook/ContactForm';
import FilterContact from './Phonebook/FilterContact';
import ContactList from './Phonebook/ContactList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <FilterContact />
      <ContactList />
    </div>
  );
}

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (store.getState().contacts !== prevState) {
//     localStorage.setItem(
//       'contacts',
//       JSON.stringify(store.getState().contacts.items),
//     );
//   }
// }

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         <FilterContact />
//         <ContactList />
//       </div>
//     );

// export default App;
