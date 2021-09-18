import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const addSameName = contacts.map(({ name }) => name).includes(name);
    const addSameNumber = contacts.map(({ number }) => number).includes(number);

    if (addSameName) {
      toast.error(`${name} is already in contacts`);
    } else if (addSameNumber) {
      toast.error(`${number} is already in contacts`);
    } else {
      dispatch(phonebookActions.addNewContact(name, number));
    }

    setName('');
    setNumber('');
  };

  const { label, input, form, button } = s;
  const buttonActive = name.length > 0 && number.length > 0;

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label className={label}>
        Name
        <input
          className={input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          placeholder=" "
        />
      </label>
      <label className={label}>
        Number
        <input
          className={input}
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          placeholder=" "
        />
      </label>
      <button className={button} type="submit" disabled={!buttonActive}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
