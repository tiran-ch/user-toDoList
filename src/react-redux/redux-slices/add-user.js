
const initialState = {
    users: [],
};

const Users = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER": return {
            ...state,
            users: [...state.users, action.payload],
        };
        case "DELETE_USER": return {
            ...state,
            users: [action.payload],
        };
        default: return state
    }
};

export default Users;