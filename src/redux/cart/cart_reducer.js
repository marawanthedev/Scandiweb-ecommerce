import { CartActionTypes } from "./cart_types";
const initState = {

    submitted: false,
    users: [],
    duplicateUserEmail: null,
    loading: false,
    IsUserInfoValid: null,
    userInAuth: null

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {



    }
    return state;
}
export default cartReducer