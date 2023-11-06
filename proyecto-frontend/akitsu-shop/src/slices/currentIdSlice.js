import { createSlice } from "@reduxjs/toolkit";

export const currentIdSlice = createSlice({
    name: "currentid",
    initialState: { id: "" },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { setId } = currentIdSlice.actions

export default currentIdSlice.reducer