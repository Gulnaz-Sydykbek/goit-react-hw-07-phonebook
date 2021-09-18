import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebooksOperations from '../../redux/phonebook/phonebook-operations';
import s from './Contacts.module.css';

const getVisiblePhonbookList = (filter, items) => {
  const normolizedFilter = filter.toLowerCase();

  return items.filter(item =>
    item.name.toLowerCase().includes(normolizedFilter),
  );
};

function ContactList() {
  const { item } = s;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebooksOperations.fetchPhonebooks());
  }, [dispatch]);

  const contacts = useSelector(state =>
    getVisiblePhonbookList(state.contacts.filter, state.contacts.entities),
  );

  const onDeleteContact = id =>
    dispatch(phonebooksOperations.deleteContacts(id));

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
