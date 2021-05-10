import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    email: '',
    name: '',
    photo: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.photo = action.payload.photo

        },
        setSignOut: (state) => {
            state.email = null;
            state.name = null;
            state.photo = null;

        }
    }
})

export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state) => state.user.email
export const selectUserPhoto = (state) => state.user.photo

export default userSlice.reducer