import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { phonebookActions, phonebookSelector } from 'redux/phonebook';

function Filter() {
  const value = useSelector(phonebookSelector.getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e =>
    dispatch(phonebookActions.changeFilter(e.target.value));

  const { label, input } = s;

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
