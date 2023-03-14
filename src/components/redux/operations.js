import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://64062fc6862956433e4c9e5c.mockapi.io/api/v1';

// export const fetchContacts = () => async dispatch => {
//     try { dispatch(fetchingInProgress());
//       const response = await axios.get("/contacts");

//       dispatch(fetchingSuccess(response.data));
//     } catch (e) {
//         dispatch(fetchingError(e.message));
//     }
//   };
export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
     
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
    'contacts/fetch',
    async (newContact, thunkAPI) => {
      try {
        console.log(newContact);
        await axios.post('/contacts', newContact);
       
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
