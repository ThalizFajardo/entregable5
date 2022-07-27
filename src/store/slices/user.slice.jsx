import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: " ",
    reducers: {
        changeUser: (state, action) => {
            return action.payload
        }
    }
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
