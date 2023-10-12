import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../config/firebaseconfig";

export const addDataSlice = createSlice({
    name: 'db',
    initialState:[{
        title: "",
        description: "",
        quantity: ""
    }],

    reducers: {
        addItem: (state, action) => {
            try {
                const docRef = addDoc(collection(db, "shoppinglist"), action.payload);
                alert('Added successfully');
            } catch(err){
                console.log(err)
            }
        },
    }
})

export const { addItem } = addDataSlice.actions;

export default addDataSlice.reducer;