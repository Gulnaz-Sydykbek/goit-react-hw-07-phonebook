//Без синтаксического сахора (без toolkit)

/*import { combineReducers } from 'redux';
import * as types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const phonebookReduser = combineReducers({
  items,
  filter,
});

export default phonebookReduser;*/

//=============================================================

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as phonebookActions from './phonebook-actions';

const items = createReducer([], {
  [phonebookActions.addNewContact]: (state, { payload }) => [...state, payload],
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
}); //Если не используем state то можно вместо него поставить _ подчеркивание.

const phonebookReduser = combineReducers({
  items,
  filter,
});

export default phonebookReduser;
