export const updateCurrentCard = 
        (value) => {
                return { type: 'UPDATE_CURRENT_CARD', obj: value }; 
        } 
export const loadCardList = 
(value) => {
        return { type: 'LOAD_CARD_LIST', obj: value }; 
} 