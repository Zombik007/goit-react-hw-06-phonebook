import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';

import styles from './Phonebook.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={styles.phonebook__form} onSubmit={this.formSubmit}>
          <label className={styles.phonebook__label}>
            Name
            <input
              className={styles.phonebook__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </label>

          <label className={styles.phonebook__label}>
            Number
            <input
              className={styles.phonebook__input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>
          <button className={styles.phonebook__button_form} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsActions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
