import { createSlice } from "@reduxjs/toolkit";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../config/firebaseconfig";

export const deleteDataSlice = createSlice({
    name: 'db',
    initialState:[{
        title: "",
        description: "",
        quantity: ""
    }],
    reducers: {
        deleteItem: async (state, action) => {
            try {
                const itemDoc = doc(db, "shoppinglist", action.payload.id);
                await deleteDoc(itemDoc);
            } catch(err){
                console.log(err)
            }
        }
    }
})

export const { deleteItem } = deleteDataSlice.actions;

export default deleteDataSlice.reducer;