import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';

function Filter() {
  const { label, input } = s;

  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const onChangeFilter = e =>
    dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label className={label}>
      Filter contacts by name
      <input
        className={input}
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder=" "
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;
