import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../redux/contacts/contacts-actions';

import styles from './Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.phonebook__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.phonebook__item} key={id}>
            {name}: {number}
            <button
              className={styles.phonebook__button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
