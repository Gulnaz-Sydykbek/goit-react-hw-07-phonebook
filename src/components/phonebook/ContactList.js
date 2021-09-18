import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';

const getVisiblePhonbookList = (filter, items) => {
  const normolizedFilter = filter.toLowerCase();

  return items.filter(item =>
    item.name.toLowerCase().includes(normolizedFilter),
  );
};

function ContactList() {
  const { item } = s;

  const contacts = useSelector(state =>
    getVisiblePhonbookList(state.contacts.filter, state.contacts.items),
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
