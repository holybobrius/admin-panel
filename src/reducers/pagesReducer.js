const pagesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH':
            return state = action.data;
        case 'UPDATE':
            return state = state.map(n => n.path === action.data.prev.path ? action.data.new : n)
        case 'POST':
            return state = state.concat(action.data)
        default:
            return state;
    }
}

export const initPages = data => ({
    type: 'FETCH',
    data
})

export const postPage = data => ({
    type: 'POST',
    data
})

export const updatePage = data => ({
    type: 'UPDATE',
    data
})

export default pagesReducer;