import  React,{useReducer} from 'react';
import  UserContext from './userContext';
import userReducer from './userReducer';
import axios from 'axios';
import {REGISTER_USER} from '../types';
const UserState = (props) => {
    const initalState = {
       user:null
    }

    const [state,dispatch] = useReducer(userReducer,initalState);

    const register =async (user) =>{
        const config = {
            header:{
                "Content-Type":"application/json"
            }
        }

        try {
            const res  = await axios.post('http://localhost:6500/user/register',{user} , config);
            dispatch({
                type:REGISTER_USER,
                payload:res.date
            })
            console.log(res.data);
        } catch (error) {
            
        }
    }

    return(
        <UserContext.Provider value={{
           user:state.user,
           register
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;