import * as t from "../type";

let init_state= {orders : []}
const main = (state = init_state , action) =>{
    switch (action.type){

        case t.SET_ORDERS: 
            return{
                ...state , orders: action.payload
            }

            default:
                return {...state}
    }
}

export default main;