import { createSlice} from "@reduxJs/toolkit";
import { Action } from "@remix-run/router";

const initialState = {
    user: localStorage.getItem("userInfo")
    ? json.parse(localStorage.getItem("useInfo"))
    :null,
    isSidebaOpen: false,

};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("userInfo", json.stringify(action.payload));
        
        },
        logout:(state, action) =>{
            state.user = null;
            localStorage.removeItem("userInfo");
        },
        setOpenSidebar: (state, action) => {
        state.isSidebarOpen = action.payload;
    },
},
});

export const { setCredentials, logout,setOpenSidebar} = authSlice.action;
export default authSlice.reducer;