import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: { data: JSON.parse(localStorage.getItem("token")) },
    reducers: {
        saveToken: (state, action) => {
            state.data = action.payload
            localStorage.setItem("token", JSON.stringify(action.payload))
        }
    }
})

export const { saveToken } = tokenSlice.actions

export default tokenSlice.reducer