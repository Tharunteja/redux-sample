const initialState = {
    users: [],
    username: 'no name'
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS': 
            return{
                ...state,
                users: action.payload,
            }
        case 'UPDATE_USERS':
            return{
                ...state,
                users: [...state.users, {username: action.payload.username, id: action.payload.userid}]
            }
        case 'DELETE_USERS':
            return{
                ...state,
                users: state.users.filter(user => {
                    if(user.id !== action.id){
                        return user;
                    }
                })
            }
        default:
            return state;
    }
}

export default rootReducer;