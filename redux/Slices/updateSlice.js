import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseconfig";


// Async thunk action to update a document in Firestore
export const updateFirestoreDocument = createAsyncThunk(
  "firestore/updateDocument",
  async (document) => {
    const docRef = doc(db, "shoppinglist", document.id);
    await updateDoc(docRef, document.data);
    return document;
  }
);

// Create a slice
const updateSlice = createSlice({
  name: "updateData",
  initialState: {
    loading: false,
    error: null
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateFirestoreDocument.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFirestoreDocument.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateFirestoreDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default updateSlice.reducer;
