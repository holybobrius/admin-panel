const pagesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH':
            return state = action.data;
        case 'UPDATE':
            return state = state.map(n => n.path === action.data.path ? action.data : n)
        default:
            return state;
    }
}

export const initPages = data => {
    return {
        type: 'FETCH',
        data
    }
}

export const updatePage = data => {
    return {
        type: 'UPDATE',
        data
    }
}

export default pagesReducer;