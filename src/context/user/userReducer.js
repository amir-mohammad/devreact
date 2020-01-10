import {REGISTER_USER} from '../types';

export default (state,action) =>{
    switch(action.type){
        case REGISTER_USER:
            return {
                ...state,
                user : action.payload
            }
    }
}