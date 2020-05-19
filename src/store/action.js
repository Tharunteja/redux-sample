import axios from "axios";

const usersApi = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
export const getUsers = () => {
    return (dispatch) => {
        return usersApi().then(
            response => {
                return dispatch({
                    type: 'GET_USERS',
                    payload: response.data
                })
            }, error => {
                console.log("error");
            }
        )
    }
}

export const addNewUser = (data) => {    
    return {type: 'UPDATE_USERS', payload:data}
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USERS',
        id: id
    }
}


