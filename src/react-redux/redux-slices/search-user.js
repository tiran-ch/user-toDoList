const initialState = {
    search: "",
};

const Search = (state = initialState, action) => {
    switch(action.type){
        case "SEARCH_USER": return {
            ...state,
            search: action.payload
        };
        default: return state
    }
};

export default Search;