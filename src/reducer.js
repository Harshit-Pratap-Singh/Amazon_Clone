export const initialState={
    basket:[],
    user: null
};

const reducer =(state,action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        case 'REMOVE_FORM_BASKET':
            const rIndex=state.basket.findIndex(({id}) => id===action.id);  
            var newb=state.basket;
            newb.splice(rIndex,1);
            
            return {
                ...state,
                basket: [...newb]
            };
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }
        default:
            return state;
        
    }
};

export default reducer;