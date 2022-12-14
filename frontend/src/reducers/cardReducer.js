const cardReducer= (state={list_robot :[], robot:undefined},action) => {
    console.log(action);
    switch (action.type){
        case 'LOAD_CARD_LIST':
            return {...state, list_cart:action.obj}
            default:
                return state;
    }

   
}