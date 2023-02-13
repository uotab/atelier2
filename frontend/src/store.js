import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/cardReducer';
import gameReducer from './reducers/gameReducer';

export default configureStore({
 reducer: {
                gameReducer: gameReducer,
                cardReducer:cardReducer

          },
})