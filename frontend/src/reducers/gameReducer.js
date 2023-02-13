const gameReducer= (state={list_cards :[], card:undefined}, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_CURRENT_CARD':
            return {...state, card:action.obj};
        case 'LOAD_CARD_LIST':
              return {...state, list_cards:action.obj};
    default:
      return state;
    }
}

export default gameReducer;