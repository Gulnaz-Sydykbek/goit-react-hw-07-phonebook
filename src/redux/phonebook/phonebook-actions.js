//Без синтаксического сахора (без toolkit)

/*import shortId from 'shortid';
import * as types from './phonebook-types';

export const addNewContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});*/

//=============================================================

import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('phonebook/ChangeFilter');
