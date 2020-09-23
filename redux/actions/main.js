import * as t from "../type";

export const setOrders =(order) =>({
    type: t.SET_ORDERS,
    payload: order,
})