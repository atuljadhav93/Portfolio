import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMoreModel: false,
}
export const slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        setOpenMoreModel: (state, action) => {
            state.openMoreModel = action.payload;
        }
    },
});

export const { openMoreModel, setOpenMoreModel } = slice.actions;

export default slice.reducer;