import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getVisiblePhonbookList = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normolizedFilter = filter.toLowerCase();

    return items.filter(item =>
      item.name.toLowerCase().includes(normolizedFilter),
    );
  },
);
