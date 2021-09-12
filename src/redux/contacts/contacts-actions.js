import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', data => ({
  payload: { id: uuidv4(), name: data.name, number: data.number },
}));

const deleteContact = createAction('contacts/Delete');

const filterContact = createAction('contacts/Filter');

export default { addContact, deleteContact, filterContact };
