import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchPhonebooks,
  addContacts,
  deleteContacts,
} from './phonebook-operations';
import * as phonebookActions from './phonebook-actions';

const entities = createReducer([], {
  [fetchPhonebooks.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchPhonebooks.pending]: () => true,
  [fetchPhonebooks.fulfilled]: () => false,
  [fetchPhonebooks.rejected]: () => false,

  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,

  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPhonebooks.rejected]: (_, { payload }) => payload,
  [fetchPhonebooks.pending]: () => null,

  [addContacts.rejected]: (_, { payload }) => payload,
  [addContacts.pending]: () => null,

  [deleteContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.pending]: () => null,
});

const phonebookReduser = combineReducers({
  entities,
  filter,
  isLoading,
  error,
});

export default phonebookReduser;
