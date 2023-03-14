import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  // fetchingInProgress(state) {
  //   state.isLoading = true;
  // },
  // fetchingSuccess(state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.contacts = action.payload;
  // },
  // fetchingError(state, action) {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
  // },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
     state.contacts = [...action.payload];
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [addContacts.pending](state) {
    //   state.isLoading = true;
    // },
    // [addContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts.push(action.payload);
    // },
    // [addContacts.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

export default contactsSlice.reducer;
